export async function onRequestGet(context) {
  const k400 = new Response(`400: Bad Request`, { status: 400 })
  try {
    if(context.params.catchall.length!=1) return k400
    let kpath = decodeURIComponent(context.params.catchall[0]);
    const khead = {
      headers: {
        "User-Agent": context.request.headers.get("User-Agent"),
        "Accept": "*/*"
      }
    }
    let kheaders = {
      "Access-Control-Allow-Origin": "*"
    }
    const mapurl = (await context.env.keys.get('urlmap', 'json'))[kpath]
    if(mapurl) {
      kpath = mapurl
    } if(kpath.match('^gdrive:[a-zA-Z0-9_-]{25,}$')) {
      kpath = `https://drive.usercontent.google.com/download?id=${kpath.match('^gdrive:([a-zA-Z0-9_-]{25,})$')[1]}&export=download`
      kheaders['Content-Type'] = 'google-drive'
    } else if(kpath.startsWith('zeqa:')&&kpath.split(':').length==3) {
      let zequery = await fetch(`https://app.zeqa.net/cosmetic/model/${kpath.slice(5).replaceAll(':','/')}.gltf`)
      if(zequery.status==200) kpath = JSON.parse(await (await zequery.blob()).text()).images[0].uri
    } else (!mapurl) return new Response(`400: Bad Request`, { status: 400 })
    const kfile = await fetch(kpath, khead);
    if(kheaders['Content-Type'] == 'google-drive' && kfile.headers.get('Content-Type').startsWith('text/html')) {
      return fetch(`https://drive.usercontent.google.com/download?${(await (await kfile.blob()).text()).match(/<input type="hidden" name="(.*?)" value="(.*?)">/g).map(a => a.match(/<input type="hidden" name="(.*?)" value="(.*?)">/).filter((b,c) => c>0).join('=')).join('&')}`)
    }
    let kfilename = kfile.headers.get('Content-Disposition') && kfile.headers.get('Content-Disposition').match('filename="(.*?)"')[1] || null
    if(kfilename) {
      if(kheaders['Content-Type'] == 'google-drive') {
        delete kheaders['Content-Type']
        let mimes = await context.env.keys.get('mime-types', 'json')
        mimes = mimes.filter(a => a[1].includes(kfilename.split(".").reverse()[0]))[0]
        if(mimes) kheaders['Content-Type'] = mimes[0]
      }
    }
    if(kfile.status!=200) return k400
    return new Response(await kfile.blob(), {
      headers: {
        "Content-Disposition": `inline; filename="${context.params.catchall[0]}"`,
        ...kfile.headers,
        ...kheaders
      }
    })
  } catch {
    return k400
  }
}