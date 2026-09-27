export async function onRequestGet(context) {
  try {
    let kpath = decodeURIComponent(context.params.catchall.join('/'));
    const khead = {
      headers: {
        "User-Agent": context.request.headers.get("User-Agent"),
        "Accept": "*/*"
      }
    }
    let kheaders = {
      "Access-Control-Allow-Origin": "*"
    }
    if([
      'id:',
      'data:',
      'http:',
      'https:'
    ].filter(a => kpath.startsWith(a)).length==0) kpath = atob(kpath)
    if(kpath.startsWith('id:')) {
      const mapurl = (await context.env.keys.get('urlmap', 'json'))[kpath]
      if(mapurl) {
        kpath = mapurl;
      } if(kpath.match('^id:google-drive:[a-zA-Z0-9_-]{25,}$')) {
        kpath = `https://drive.usercontent.google.com/download?id=${kpath.match('^id:google-drive:([a-zA-Z0-9_-]{25,})$')[1]}&export=download&confirm=t`
        kheaders['Content-Type'] = 'google-drive'
      } if(kpath.startsWith('id:zeqa:')&&kpath.split('/').length==2) {
        let zequery = await fetch(`https://app.zeqa.net/cosmetic/model/${kpath.slice(8)}.gltf`)
        if(zequery.status==200) kpath = JSON.parse(await (await zequery.blob()).text()).images[0].uri
      } if(kpath.startsWith('id:')) return new Response(`404: Not Found`, { status: 404 })
    } else if(kpath.length>2048) return new Response(`414: URI Too Long`, { status: 414 });
    else if([
      'data:',
      'http:',
      'https:'
    ].filter(a => a == new URL(kpath).protocol).length==0 || [
      'corsproxy.kee7702.workers.dev'
    ].filter(a => a == new URL(kpath).hostname).length>0) return new Response(`400: Bad Request`, { status: 400 })
    let kfile = await fetch(kpath, khead);
    if(kheaders['Content-Type'] == 'google-drive' && kfile.headers.get('Content-Type').startsWith('text/html')) {
      return fetch(`https://drive.usercontent.google.com/download?${(await (await kfile.blob()).text()).match(/<input type="hidden" name="(.*?)" value="(.*?)">/g).map(a => a.match(/<input type="hidden" name="(.*?)" value="(.*?)">/).filter((b,c) => c>0).join('=')).join('&')}`, khead)
    }
    let kfilename = kfile.headers.get('Content-Disposition') && kfile.headers.get('Content-Disposition').match('filename="(.*?)"') || null
    if(kfilename) {
      kfilename = kfilename[1]
      if(kheaders['Content-Type'] == 'google-drive') {
        delete kheaders['Content-Type']
        let mimes = await context.env.keys.get('mime-types', 'json')
        mimes = mimes.filter(a => a[1].includes(kfilename.split(".").reverse()[0]))[0]
        if(mimes) kheaders['Content-Type'] = mimes[0]
      }
    }
    return new Response(await kfile.blob(), {
      headers: {
        "Content-Disposition": `inline; filename="${kfilename || kpath.slice(kpath.lastIndexOf('/')+1).slice(0,64)}"`,
        ...kfile.headers,
        ...kheaders
      }
    })
  } catch(e) {
    return new Response(`400: Bad Request\n  ${e.stack}`, {
      status: 400
    });
  }
}