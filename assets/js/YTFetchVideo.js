(async()=>{videolist=await (await fetch("https://www.googleapis.com/youtube/v3/videos?id=" + new URLSearchParams(window.location.search).get('id') + "&part=snippet&key=" + innertube_api_key)).json();video=0;document.getElementById("videos").innerHTML = '<div class="global-annoucement" style="height: 401px;"><a style="font-size: 16px;line-height: 20px;color: rgb(204, 204, 204);position: absolute;margin-top: 371px;padding: 10px 10px 0px 0px;background: #333;border-radius: 0px 10px 0px 0px;z-index: 2;">' + (Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/31536e6)>1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/31536e6)+" years ago":1==Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/31536e6)?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/31536e6)+" year ago":Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/2592e6)>1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/2592e6)+" months ago":1==Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/2592e6)?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/2592e6)+" month ago":Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/6048e5)>1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/6048e5)+" weeks ago":1==Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/6048e5)?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/6048e5)+" week ago":Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/864e5)>1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/864e5)+" days ago":1==Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/864e5)?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/864e5)+" day ago":Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/36e5)>1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/36e5)+" hours ago":1==Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/36e5)?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/36e5)+" hour ago":Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/6e4)>=1?"Uploaded "+Math.floor((new Date-new Date(videolist.items[video].snippet.publishedAt))/6e4)+" minutes ago":1>Math.floor(Math.floor(new Date-new Date(videolist.items[video].snippet.publishedAt))/6e4)?"Uploaded less than a minute ago":"Invalid Date"!==new Date(videolist.items[video].snippet.publishedAt).toDateString()?new Date(videolist.items[video].snippet.publishedAt).toDateString():videolist.items[video].snippet.publishedAt) + '</a><div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+new URLSearchParams(window.location.search).get('id')+'"></div></div>';const player = new Plyr('#player',{ratio:'16:9'})})()
