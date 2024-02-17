import Script from "next/script";

function HeadCode() {
  return (
    <>
      <title>Lily Pointon's Portfolio</title>
      <meta
        property="og:title"
        content="Lily Pointon's Portfolio"
        key="title"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
        rel="stylesheet"
      />
      <Script>
        {`(function(d) {
    var config = {
      kitId: 'vjk7hwg',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  }
        )(document); `}
      </Script>
    </>
  );
}

export default HeadCode;
