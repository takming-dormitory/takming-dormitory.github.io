/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c203bde82709ab290efb642190af9567"],["/about/index.html","22133f7849c711bfa6636f9afa13972d"],["/archives/2022/02/index.html","8675ce9257ce9627f3580012b1e4987b"],["/archives/2022/06/index.html","cbfbc2d4c8ac0e7b1efd01522842ae97"],["/archives/2022/07/index.html","e75fe4861a7ef92f168e671b7e43e915"],["/archives/2022/08/index.html","20a09ad144cad8f341e36a0bc9073981"],["/archives/2022/09/index.html","b41f0fad26beeb118de344c772467047"],["/archives/2022/10/index.html","fa4374e4752aa644b5cb973613b18131"],["/archives/2022/12/index.html","c2ba9541bf9e98984f9410c8519f0dcb"],["/archives/2022/index.html","fe3527e522c6589626b76a79a5148d1c"],["/archives/2022/page/2/index.html","f1f06da6309bafeaa18b60d3fe07d7c9"],["/archives/2023/03/index.html","f3302f65c2828dee1542eba392a69fe4"],["/archives/2023/05/index.html","bc118c4ae61eb0b1b60d26b1caef18f4"],["/archives/2023/08/index.html","4d852093cc18de11ab43fc99c75650d3"],["/archives/2023/12/index.html","2e908d29665408462272789e8259a6f4"],["/archives/2023/index.html","f4c7578c21852c1176d8f525420f830c"],["/archives/2024/02/index.html","79014c6f34f629d79f178f43b4f6b6b8"],["/archives/2024/03/index.html","b9a1e79e61676171adfc3f916d455c0e"],["/archives/2024/04/index.html","7054b62411493e05ed84bde53c162872"],["/archives/2024/05/index.html","82e59bb3005ff7d38b6846fc5fa21d81"],["/archives/2024/08/index.html","bf3f76ef1ad258120ef175a2a8108669"],["/archives/2024/10/index.html","862990baee14efc082d7faa855efdd12"],["/archives/2024/12/index.html","ea5c7b25bd57e66e1f87c1f74ff64cd3"],["/archives/2024/index.html","cdc0384af550fd87cc3861eac47dbce8"],["/archives/2024/page/2/index.html","71f9801cfc03d88d04491dd6013daa78"],["/archives/index.html","b0181ceced4c5983bdc5ab23a07569f5"],["/archives/page/2/index.html","f1d5318aab4182a2ed1aa57404e6270c"],["/archives/page/3/index.html","d4c639c9facc42f9c5b59770f0c7bb32"],["/archives/page/4/index.html","df66a3125c59dc450692f605aca4e200"],["/categories/index.html","35dd021a7906d16dc5bfadb6acd3c78b"],["/categories/學校活動/index.html","e1b2f9d87afd7607a024784e166ac23e"],["/categories/宿舍公告/index.html","f5b6a6e5c018ffd444d9601cb980e016"],["/categories/宿舍活動/index.html","6c8dbdb82b25a96e622587a63853148e"],["/categories/宿舍活動/page/2/index.html","619ad605520c1b1551a0f4013b70a5cd"],["/categories/宿舍活動/page/3/index.html","dbd97e84f97d552fc45e6809101baddf"],["/categories/測試活動/index.html","802d46925915fff686aa0c2361634f5a"],["/categories/生輔組活動/index.html","63ed6ad202da6ea4338a7e3dee62eb0f"],["/categories/管理員公告/index.html","79213ed8c5740f3e60435c9bb5748476"],["/convention/index.html","4f3f4c77a91434ffa7e7a15770c6a5f6"],["/css/index.css","e2ecc9b5ac16cb1669676b04928813cd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/download/index.html","32e56f6a0a730c6ebc1c504e56fed2b1"],["/events/index.html","6c502db6c17f7b9a91a47053b0f1cdcf"],["/images/15屆.jpg","91dbd910fddbcd80679c546cab31739a"],["/images/about/2023宿舍幹部/三樓副樓.jpg","90b1007f4de7be1f25b39e0bf72e4c1f"],["/images/about/2023宿舍幹部/值勤 哲.jpg","cdfb55f0f77b1119176cce1294b9bc2f"],["/images/about/2023宿舍幹部/值勤 妏.jpg","8b454135c5c982e324797f040fbfdfde"],["/images/about/2023宿舍幹部/值勤 禾.jpg","70d2ebe1a8ac55cd068ac7eff3175b90"],["/images/about/2023宿舍幹部/值勤 華.jpg","58ff6da0771a8790c9e9e29b0fdf1ebf"],["/images/about/2023宿舍幹部/大臻姊.jpg","d054ea2b5dfac9a8b4e71458b33e6870"],["/images/about/2023宿舍幹部/帥.jpg","6a2139d891ca742b853ef360c75eff0d"],["/images/about/2023宿舍幹部/我==.jpg","8945c8b3844181527e2521a4ac188a3c"],["/images/about/2023宿舍幹部/文書.jpg","d366f65af6d93119fa204d537a6f9667"],["/images/about/2023宿舍幹部/最後一人.jpg","304bb31c20291cccdade77023bdda0e1"],["/images/about/2023宿舍幹部/會長.jpg","da33e103107b1cd30822e68559293e08"],["/images/about/2023宿舍幹部/活動.jpg","fd7c124a06be886db7cd573de493ace1"],["/images/about/2023宿舍幹部/綸.jpg","a6dd0ee45b8133388d97c11d512f665c"],["/images/about/2023宿舍幹部/綸妹妹.jpg","ee2761af5ec2ef6dc62e6088c2c36c7d"],["/images/about/2023宿舍幹部/緒女友.jpg","7817b286c2dc481e59ce2490c8b03f82"],["/images/about/2023宿舍幹部/美宣 大眼睛.jpg","1a03556b16b234ca2d7b70f07a1772dd"],["/images/about/2023宿舍幹部/美宣 排球.jpg","be40d43bfcdf9167f4892e5f7c5c0349"],["/images/about/2023宿舍幹部/胖胖.jpg","fc08d1e9926c852b9b6a56ff8bc979cf"],["/images/about/2023宿舍幹部/設備 女.jpg","23b69ef8bd01bfddaecf463513062122"],["/images/about/2023宿舍幹部/設備男.jpg","db23b4b7cfba88fd64d7e779751d5f2e"],["/images/about/2023宿舍幹部/話很多很直接.jpg","3cafc8f7e2a4ddc8f084078a3ddd00c7"],["/images/about/2024宿舍幹部/5樓樓長.jpg","5fe9d8aec1a6f95f361ad742c9da5936"],["/images/about/2024宿舍幹部/一樓副樓.jpg","a497bf3d57bb18af2d78e91ac6ea7194"],["/images/about/2024宿舍幹部/一樓樓長.jpg","b251d2b329981a35e98b74962fe77d48"],["/images/about/2024宿舍幹部/三樓副樓.jpg","5736a2f57e6472d000ea5fd6a1783560"],["/images/about/2024宿舍幹部/三樓樓長.jpg","1d9bd2724041a707d088c6d966f7d11e"],["/images/about/2024宿舍幹部/二樓副樓.jpg","b8de33774ead7c381ed606b6dd3d4e49"],["/images/about/2024宿舍幹部/二樓樓長.jpg","90b9fb50f1a9cfb2766958f7bfab6dbf"],["/images/about/2024宿舍幹部/五樓副樓.jpg","f59e051872f501c62646d765dc60b2f6"],["/images/about/2024宿舍幹部/副會.jpg","bfb4fefd9e394102b6f2fe22c464b5a0"],["/images/about/2024宿舍幹部/副活動.jpg","112f7f0bd6bb92e0dc88bbb55e6be558"],["/images/about/2024宿舍幹部/四樓副樓.jpg","23947b08d39bbaadc580bf621ed5842f"],["/images/about/2024宿舍幹部/四樓樓長.jpg","4a946d87088793b333682a103caa0684"],["/images/about/2024宿舍幹部/執勤活動.jpg","a9a8b711eb2052496fc23b168b03b813"],["/images/about/2024宿舍幹部/文書.jpg","eb0d4ebe70326e10ec6d5cf24100b531"],["/images/about/2024宿舍幹部/文書.值勤.jpg","0654833fb59f408af10986c2670b7c55"],["/images/about/2024宿舍幹部/會長.jpg","ae80319087eaa4af2b0d89d7eb4a9caa"],["/images/about/2024宿舍幹部/活動值勤.jpg","5667d1a4580ab537773579e1fb27f415"],["/images/about/2024宿舍幹部/美宣執勤.jpg","ad35c0344d8d2aeee884a8c5ba511051"],["/images/about/2024宿舍幹部/資訊.jpg","d9cf25c5a9538e2f08aa58565f6c0076"],["/images/about/宿舍幹部/1.jpg","169e79889467826764bc5bfd607412f6"],["/images/about/宿舍幹部/10.jpg","46c71a5b3364f3f08a048b21b73e27aa"],["/images/about/宿舍幹部/11.jpg","6ca6f464433049f325aa54cc5507b969"],["/images/about/宿舍幹部/12.jpg","817d4f3edf82d08a40be811b74544cd5"],["/images/about/宿舍幹部/13.jpg","12dabd0c952688863e2cd05ddb5ee27a"],["/images/about/宿舍幹部/14.jpg","0f62171e0ea45cf2679cf4890f7749e5"],["/images/about/宿舍幹部/15.jpg","29e5c538aee59cd5c840218d9cd9bc90"],["/images/about/宿舍幹部/16.jpg","fedf14fe6475086f6d65a77cbd1e744c"],["/images/about/宿舍幹部/17.jpg","c1655cd0aacfa8c5ee40db4fa3faf853"],["/images/about/宿舍幹部/18.jpg","4c67be175096b0bf0ffdf7f598353ea1"],["/images/about/宿舍幹部/19.jpg","18044eabf3a42fdeb663be4997d3311a"],["/images/about/宿舍幹部/2.jpg","cd2ca6f5b47acc1de50223150caf9dc2"],["/images/about/宿舍幹部/20.jpg","463e3c3a63849042dd06b66c21d54e0f"],["/images/about/宿舍幹部/21.jpg","f683bd26ff755ba099462b01dd337b9e"],["/images/about/宿舍幹部/22.jpg","a9f4de3583b4e239a17cdf13c1a72bcc"],["/images/about/宿舍幹部/23.jpg","0a5b1661f9cf5f52ca3049b3973c2916"],["/images/about/宿舍幹部/3.jpg","09ce0e983d986de3960be15d5e5b8267"],["/images/about/宿舍幹部/4.jpg","ebc5dbf8ccbf0e7e543defb383768187"],["/images/about/宿舍幹部/5.jpg","9ac4d369b3925b775bdc86f67be42e05"],["/images/about/宿舍幹部/6.jpg","10b9b8e4406997b722daea076e4c83a1"],["/images/about/宿舍幹部/7.jpg","90d3e4442e748dee66fc9422b326b14f"],["/images/about/宿舍幹部/8.jpg","6086f65d5fcea846504697ba41fe325a"],["/images/about/宿舍幹部/9.jpg","11439ade31e9396938e59d3a8514579a"],["/images/about/宿舍簡介/life.jpg","720b1a29cfb3407ee7afef14cc50fdad"],["/images/about/宿舍簡介/宿舍簡介.jpg","77036c9475bf64ae9a2ea44f81c8097e"],["/images/about/宿舍老師/1.jpg","93cc76a9d665f3a6de5287cddfeefd0a"],["/images/about/宿舍老師/2.jpg","60917b9f20bb8595f8f46190b17ddcdc"],["/images/about/宿舍老師/3.jpg","ea8e4038a0a53bf08d1f69f3c0d764f9"],["/images/about/宿舍老師/4.jpg","11ce9c3e61aa89b6bc761bb036666714"],["/images/about/舊宿舍幹部/1.jpg","efe589a0f79ed71952a8cb22c21a2fe7"],["/images/about/舊宿舍幹部/10.jpg","de988d7ab97bb045a10cab9e31320c63"],["/images/about/舊宿舍幹部/11.jpg","820f31ecc360ac7b95868a1ab0981cb4"],["/images/about/舊宿舍幹部/12.jpg","8e349c4d04449351e7bcea2be0d121f0"],["/images/about/舊宿舍幹部/13.jpg","ebedd336a8a7b920044ae365a4c5fd14"],["/images/about/舊宿舍幹部/14.jpg","6db21e84c7cf2111946560af59c5054c"],["/images/about/舊宿舍幹部/15.jpg","6e07bce48e9bfff8500497c8f4d9c344"],["/images/about/舊宿舍幹部/16.jpg","0ad8aebdaae70f85d3399dfb1f5b532d"],["/images/about/舊宿舍幹部/17.jpg","a244b2620d2c5497504c30419f98aa61"],["/images/about/舊宿舍幹部/18.jpg","550b5e69f26470a7bd6651b1ff4c857a"],["/images/about/舊宿舍幹部/19.jpg","4442bd429b0b95bd49a6573561df73d1"],["/images/about/舊宿舍幹部/2.jpg","f44fa1040d872e61dffc64df77f13708"],["/images/about/舊宿舍幹部/20.jpg","d561c633e0778a3f1e5d01aaa9d871e4"],["/images/about/舊宿舍幹部/21.jpg","7e8cc98e29b768a30730bb1a6e6fc80e"],["/images/about/舊宿舍幹部/22.jpg","ab0970f1c3296c6bd75c76a71eccc3b3"],["/images/about/舊宿舍幹部/23.jpg","71802eceb5eb672f14f05b80ba8a7516"],["/images/about/舊宿舍幹部/24.jpg","9ed764d1c98456ee0681e86adecc5ef5"],["/images/about/舊宿舍幹部/25.jpg","5b4e075b49547e9dbcd9a67c589e3a1e"],["/images/about/舊宿舍幹部/3.jpg","4aaa8107638514d787dff9fc7f76c3ad"],["/images/about/舊宿舍幹部/5.jpg","00d61abf475e19030b2f23dad2311c9f"],["/images/about/舊宿舍幹部/6.jpg","b2589ae91237c3e0ff4cddefe1f1307d"],["/images/about/舊宿舍幹部/7.jpg","3f89f270709895d9b33f138798640008"],["/images/about/舊宿舍幹部/8.jpg","b2cf88584df923378bc39d078f5975c6"],["/images/about/舊宿舍幹部/9.jpg","25c02ca4b5169cd5b6d3851575c15f49"],["/images/carousel/slide1.jpg","a466237b10aa38e08f1a1f4f1f41182d"],["/images/carousel/slide2.jpg","ccc09160bc520419f302ee1e44778431"],["/images/carousel/slide3.jpg","c938ffc0e742e8530af9836136989905"],["/images/carousel/slide4.jpg","7922c1d8a5a04e4fdd062b37f52f6b3d"],["/images/carousel/slide5.jpg","f6045fb675c101fe2431c1e60a427141"],["/images/carousel/slide6.jpg","11abde25baaa6a49d6273ce85a35ef7e"],["/images/carousel/slide7.jpg","0d52e46514bc0256e21593024fe1d2a3"],["/images/carousel/slide8.jpg","52c5883c95e64aaadd58878e125a84ff"],["/images/carousel/slide9.jpg","4a0710067c8d9ac3e242ef759aeef69a"],["/images/cover.jpg","bb042080b4b4f23889bb8965f025babb"],["/images/form.svg","e9ebb717b631c7d8e7128c8eeecc3eb9"],["/images/life.jpg","ce30f7afa69190db8cdb43829fa50e4c"],["/images/mail.png","14fa675dfc9c09ba6544cee7c2cd899b"],["/images/map/map-1.png","346733ac29f4fed9ce1b8fc4634311b6"],["/images/old/slide1.jpg","401c6cfc52240d5a7c8db211cdebed1f"],["/images/old/slide2.jpg","1d3fc644a30fec03f64b4a4387b32bf2"],["/images/old/slide3.jpg","a9548e33373e3a695166a2e0aa77891c"],["/images/old/slide4.jpg","e897ea67f7485b0657d239ccdccb5495"],["/images/old/slide5.jpg","52c5883c95e64aaadd58878e125a84ff"],["/images/old/slide6.jpg","d5e29d22be0498c7bf478e609653d4b0"],["/images/picture/2021/0318.jpg","415268dd8a337de0ae2f59bed8ce3c01"],["/images/picture/2021/0505.jpg","933e7dce467c3f7b6de1fedec212cd88"],["/images/picture/2021/1216.jpg","f2415119a2a394252a436d05b54705f7"],["/images/picture/2022/0317.jpg","cb1790149b85e40eb40c7416267a9e2a"],["/images/post/android.jpg","65f79f3d037f144add35229d1960a29e"],["/images/post/android1.jpg","dee5e00599839dd7ba4355e3d2ed4dad"],["/images/post/android2.jpg","62da2ae968ac93601b50893cb50043ba"],["/images/post/ios.png","c90f171f93c40374bff77b06fcd0f6a2"],["/images/post/ios1.png","ea753b6f77181d5ef48a61ef89daf2d6"],["/images/post/ios2.png","c2e4085d1b22b8008d849decb3886bf7"],["/images/top_img.jpg","4a0710067c8d9ac3e242ef759aeef69a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","1be7193bc8194ec1469646c6b75f8941"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/link.png","6b8301fe36dde1cc3a1448a7d40372db"],["/index.html","dadc7b77fc29210ce91abfc5ceda4d54"],["/issue/index.html","6b8363426fc4e4dfc7803e499b336e00"],["/js/custom/footer.js","8cd617bd27db6cd6cdd6369b36ce422d"],["/js/custom/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/custom/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/custom/wow_init.js","63bfe63fafe66b52f51b7add85f86447"],["/js/main.js","7dd471cc2981750b93a949829526025e"],["/js/search/algolia.js","868436d67bbf3d46ecc22e03bce74447"],["/js/search/local-search.js","349c6a8302ef6883e81b291f220fb8d3"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","fcea8b7dac4fd16ed24815974f5c929f"],["/page/2/index.html","a026b291f5a2ebc47a76f35f54e38121"],["/page/3/index.html","ea21eec8d227aab9990c49c5b92f1830"],["/page/4/index.html","3926d2af2c7535af7330d5332685c229"],["/picture/110/9/index.html","cacdd795811b144062a20580b1921cbe"],["/picture/111/1/index.html","cb51e9a1f7a991b1f27a8c5a9a6396a0"],["/picture/111/2/index.html","0997ba7a1ac9ae13a2fd1cbc427be329"],["/picture/111/3/index.html","da2f80d65d1cfaa08e838aad03a28900"],["/picture/111/4/index.html","b6bd89c9fb6b6e639bd8097a4081cd49"],["/picture/111/5/index.html","adaff19f0a5d27a71e139e10cf064fec"],["/picture/111/6/index.html","7e88275b9353f8022a87e2732ce3de31"],["/picture/111/7/index.html","06e885c6a2e9596bb9a470aca926a8a9"],["/picture/112/1/index.html","4f66f0e6fbc31ebca174218a544079d4"],["/picture/112/2/index.html","da85474b8a0b0fb050162ec06d1f6790"],["/picture/112/3/index.html","d95220f0e263213d0c9d9adf7a00e456"],["/picture/112/4/index.html","78bbc4c391fbf0c05f16b679828363b7"],["/picture/112/5/index.html","3f0dcf2791c52f1ec5a3a746e38eebe5"],["/picture/113/1/index.html","4b91b31d394ffd2e7518b21b63c61a8f"],["/picture/113/2/index.html","fa45b1e62d2f9affc40b37632b44fd81"],["/picture/113/3/index.html","27d3b59d3ac3a38f6d9edab27089320a"],["/picture/113/4/index.html","efe9c88301b5cd37297d5a2bf92cb922"],["/picture/113/5/index.html","683ab95027d041b0a6417185fed17cca"],["/picture/113/6/index.html","010f74a6e45cce43d6098ff00587b6a7"],["/picture/113/7/index.html","59ff45a36bd2b0d7d9e16997dcecccb8"],["/picture/index.html","13b0dd13b79ff1ddeed3267d88a7aed5"],["/post/110-2端午節/index.html","1f15075c3898e2df8f89621171683938"],["/post/111 人生很難不能在懶/index.html","29b57ca9261176f095e4d2d6ae8253c8"],["/post/111-1室長大會/index.html","70cc177be5b0616567a7c4c3c94e2223"],["/post/111-1賃居座談會/index.html","e9de7d1f17f027886603d844c0094760"],["/post/111-1防治校園霸凌專題講座/index.html","e1f85150bad5e1e17c02c273aae02008"],["/post/111-1電影欣賞/index.html","c5da9daaf9868af69f41e5129ad837b8"],["/post/111-1駐宿夜談/index.html","a89184893cc56bc74a1bd6b69ad05549"],["/post/111-2室長大會/index.html","993684434594ec46786f12c25bb7b367"],["/post/111-2駐宿夜談/index.html","0082b6304ea45f7355c1712f5c1f6ca5"],["/post/111宿舍迎新/index.html","475fee490b306e1bbff9325d371996cb"],["/post/112 拆解職場溝通地雷/index.html","154ed80f7dd0b3d391a1a3270a3fcacb"],["/post/112 法務部調查局參訪/index.html","639eab0a2953a022f5942110bebf1bb7"],["/post/112-2住宿夜談/index.html","e7fbcf036b976ac10b979d1cf66acac4"],["/post/112-2室長大會/index.html","ddcc36063392e4de0a7f7ab824bbd139"],["/post/112一般生入宿/index.html","c713fa69f9f26758aed5bd914cc903e2"],["/post/112冬至暨聖誕節/index.html","f2d34b6c41cbbc1135378d72f0ccd6b4"],["/post/112室長大會/index.html","c6541f5b6a433946a8d4414d810ef5df"],["/post/112宿舍迎新/index.html","b8aa21a69b18edd52dc5b8579a8fbd73"],["/post/112新生進宿/index.html","e11d74101d7e54448918f8a83fe7265c"],["/post/112防災演練/index.html","2edca5a4ab0bb7a5b39fcd0600dcdc44"],["/post/112電影欣賞/index.html","6b40eefcf11de4563f85b90846558c5e"],["/post/112駐宿夜談/index.html","6a36f53a44fccff19a69de08a186be4c"],["/post/113  17屆 幹部&環保遴選/index.html","56afd67dbb547a26084d7aa6a4c0d85d"],["/post/113 17屆正副會長遴選/index.html","38068f1df999654d2879d5dc1796b7f8"],["/post/113-1住宿夜談/index.html","16e9fb90106e86c44616f45fdf6c72c3"],["/post/113-1室長大會/index.html","ada2b1b8edc36da946866085b40d9f3e"],["/post/113一般生入宿/index.html","812d6ed5fe35546122630de445e0da6e"],["/post/113冬至暨聖誕節/index.html","565f6958a7b1c33dded9cf51abbb5d9c"],["/post/113宿舍迎新/index.html","3c62022754caf387eb2dc5e8d3c1c521"],["/post/113專題講座/index.html","746748cc4c287a984ecc6c5a0936f85a"],["/post/113新生進宿/index.html","2089219106847dcc208394ed6a99712e"],["/post/113防災演練/index.html","56566735c6f7252934b98404afe68710"],["/post/app/index.html","018c4bc6585a09f7580d507a66aecaf5"],["/post/boy/index.html","a285805e586fa238e501961335b97484"],["/post/girl/index.html","f20b3fbb5306e5d7cdb2549a803c9179"],["/post/住宿名單/index.html","2150fb45d300440a7c41aaedc2701a7e"],["/post/住宿流程/index.html","6f3c2de0912b9abf8795b84c1c253b88"],["/post/國家人權博物館景美紀念園區參訪/index.html","d039f551da375ce7cfc424b444beed41"],["/pwa/16.png","714370a8d95bf9aaff19bef184e6060b"],["/pwa/32.png","c48cf4036a42ecca81459183fb8385d5"],["/pwa/apple-touch-icon.png","1be7193bc8194ec1469646c6b75f8941"],["/pwa/icon-128x128.png","ade36b0ab63470fc964c74fc2c94a0a1"],["/pwa/icon-192x192.png","1be7193bc8194ec1469646c6b75f8941"],["/pwa/icon-256x256.png","7b01c8fb654ae5377887b521e67a034b"],["/pwa/icon-512x512.png","4182d324fc07cfa6ab333bba4e08f48a"],["/pwa/safari-pinned-tab.svg","b916d31e967f0ade3b71f7456bb9afa0"],["/search.xml","42d3c553858e54343ea621996d2ae6d9"],["/sitemap.xml","c099a1629bf30c000a7b9625ff5694ba"],["/sw-register.js","5ef410782620cae96d4912d26ab21b3e"],["/tags/index.html","d797cd74088f78f29d360d97b41f2dbd"],["/timeline/index.html","e2ec6bb254bdc7e7457a70abb1418006"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
