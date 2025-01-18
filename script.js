const brands = [
  "Acura",
  "Alfa_Romeo",
  "Aston_Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Citroën",
  "Dodge",
  "Ferrari",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Kia",
  "Koenigsegg",
  "Lamborghini",
  "Land_Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes_Benz",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Pagani",
  "Peugeot",
  "Porsche",
  "RAM",
  "Renault",
  "Rolls_Royce",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Wiesmann",
  "Zenvo",
];

const carImages = {
  Acura: [
    "https://1000logos.net/wp-content/uploads/2018/09/acura-symbol.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159614505/2022_acura_mdx_angularfront.jpg",
    "https://d3s8goeblmpptu.cloudfront.net/mrp/acura/2024/tlx/2024-acura-tlx_landing_633274.jpg",
    "https://images.hindustantimes.com/auto/img/2022/04/13/600x338/Acura_RDX_1649835554199_1649835561685.JPG",
    "https://pictures.dealer.com/m/motorworldacuraadw/1464/5a7ad7cc48247d29d1f0e5e1e0a00771x.jpg",
    "https://www.usnews.com/object/image/00000191-70f9-d62e-a599-f3f906cc0000/01-usnpx-2025acuramdx-angularfront-jmv.JPG?update-time=1724177346327&size=responsive640",
    "https://www.motortrend.com/uploads/sites/10/2021/09/2021-acura-nsx-4wd-coupe-angular-front.png?w=768&width=768&q=75&format=webp",
    "https://www.acura.com/-/media/Acura-Platform/homepage/hero-carousel/2024/zdx/zdx-on-sale/Homepage-Hero-ZDX_S.jpg",
  ],
  Alfa_Romeo: [
    "https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png",
    "https://www.alfaromeousa.com/content/dam/alfa/us/luxury-vehicles/luxury-suv/my24-alfa-luxury-vehicles-media-block-luxury-suv-mobile.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159547118/2020_alfa_romeo_4c_angularfront.jpg",
    "https://di-uploads-pod37.dealerinspire.com/alfaromeoofsantamonica/uploads/2022/10/2023-alfa-romeo-giulia-white.png",
    "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/IMG_7851.JPG",
    "https://cloudfront-us-east-1.images.arcpublishing.com/crain/FWYBNZBQHBFKDBXLLMXG64SNMA.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159614774/2022_alfa_romeo_stelvio_angularfront.jpg",
    "https://images.hgmsites.net/hug/alfa-romeo-stelvio_100808795_h.jpg",
  ],
  Aston_Martin: [
    "https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo-1932.png",
    "https://di-uploads-pod31.dealerinspire.com/astonmartinpalmbeach/uploads/2020/10/Aston-Martin-Silver.jpg",
    "https://media.ed.edmunds-media.com/aston-martin/dbx707/2023/oem/2023_aston-martin_dbx707_4dr-suv_base_fq_oem_1_1600.jpg",
    "https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg",
    "https://www.stratstone.com/-/media/stratstone/aston-martin/models/inline-images/dbx707/aston-martin-dbx-707-lifestyle-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=9438A5F6AA8613578BD07891BDC18E0B",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Aston-Martin-DB12-210520241550.jpg&w=872&h=578&q=75&c=1",
    "https://media.wired.com/photos/59323c444dc9b45ccec5cbed/master/w_1600%2Cc_limit/vulcan-5.jpg",
    "https://www.goodwood.com/globalassets/.road--racing/road/news/2020/6-june/list-best-aston-martins-ever/best-aston-martins-ever-made-8-aston-martin-dbs-superleggera-goodwood-22062020.jpg?rxy=0.5,0.5",
  ],
  Audi: [
    "https://autoled.tech/cdn/shop/products/424BDED8-19C7-41CA-BE83-679D4E77219F.png?v=1672558380",
    "https://hips.hearstapps.com/hmg-prod/images/2025-audi-sq6-e-tron-115-666c7da0c4adb.jpg?crop=0.598xw:0.505xh;0.207xw,0.268xh&resize=700:*",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A4-030420241601.jpg&w=872&h=578&q=75&c=1",
    "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT9eaaXo1dzlC9D3OLNi-RudCrNa8MgZWoC7GVUCCmQNI8IUDCU5VBjAJMm8FiLAD8ZksmRkYWCuAjEgGEBDUMCASCLO7uIY4evoEAwCNG0p72QAAAA.webp?wid=468",
    "https://uploads.audi-mediacenter.com/system/production/car_families/21/photos/c66adb1674c5fe08e1dc0fc057426025fec862d1/web_1440_A6.jpg?1710839702",
    "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grTxNXu7uebK4Wa8-m020r5pvtvP7wIwMrUBfjIiDBzAYk-MKBBKcnA5gEmXcARASA-Ey2zAwMrBVARiQDCPDxlRblFCQWJebqlWemlGQIahgQCYTZXVxDHD19ggFVylB_6QAAAA",
    "https://www.stratstone.com/-/media/stratstone/audi/car-models/a4-saloon/audi-a4-saloon-front-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=1D00483A445E5E08A4D3991D63915256",
    "https://media.architecturaldigest.com/photos/58f663faaf560d04a46dbaae/16:9/w_2560%2Cc_limit/Audi%2520E-tron%2520Sportback%2520concept%2520car%25201.jpg",
  ],
  Bentley: [
    "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2023/08/15092637/Make-Matters-Bentley-Logo-Meaning-and-History-_-Cover-15-8-23.jpg",
    "https://pictures.dealer.com/b/bentleyparsippany/1684/29148718b3a886a38d5b04fc061d35fax.jpg",
    "https://luxembourg.bentleymotors.com/picserver1/userdata/1/31595/3FAdVwEMPE/m_my25_gtc_speed_front%20600x300.png",
    "https://content.homenetiol.com/2000157/2065512/0x0/482d69796f37428b85284e4997330cd4.jpg",
    "https://media.ed.edmunds-media.com/bentley/bentayga/2024/oem/2024_bentley_bentayga_4dr-suv_a-v8_fq_oem_1_1600.jpg",
    "https://media.wired.com/photos/59a7073e35e1e75876739dd0/master/pass/Bentley-Art.jpg",
    "https://newdelhi.bentleymotors.com/picserver1/userdata/1/31596/3FAdVwEMPE/dws%20600x300%20silverlake%20bentayga%20range.jpg",
    "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/12/bentley-flying-spur.jpg",
  ],
  BMW: [
    "https://wallpapers.com/images/featured/bmw-logo-jw4vqn06c9bkxtry.jpg",
    "https://carstreetindia.com/blogs/wp-content/uploads/2022/09/25-1-scaled.jpg",
    "https://www.autobest.co.in/uploads/blog/407718653022.jpeg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://www.bmwgroup.com/en/company/_jcr_content/main/layoutcontainer_1988/columncontrol/columncontrolparsys/globalimage.coreimg.jpeg/1701354503044/720x720-i5er.jpeg",
    "https://i.insider.com/558da8186bb3f73872daa49b?width=700",
    "https://www.motortrend.com/uploads/2023/09/002-2024-BMW-i5-front-three-quarters-in-action.jpg?w=768&width=768&q=75&format=webp",
    "https://pictures.dealer.com/i/irvinebmwbmw/1843/43ee5afa6a94835bff262c3145f9e2e8x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  ],
  Bugatti: [
    "https://mycarheaven.com/wp-content/uploads/2023/02/Bugatti-Logo-on-a-Grill-1200x710.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/14bugatti-divo-99leadgallery-1535035005.jpg",
    "https://media.wired.com/photos/5927284ff3e2356fd800b9b4/master/w_1600%2Cc_limit/03_CHIRON_34-front_WEB.jpg",
    "https://media.architecturaldigest.com/photos/66758a12539a07cf706eefaa/master/pass/EMBARGO-BUGATTI-World-Premiere-Presskit-Images-26.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2026-bugatti-tourbillon-104-66709d54aa287.jpg",
    "https://carorbis.com/wp-content/uploads/2022/11/Bugatti-Chiron-Car.png",
    "https://i.pinimg.com/736x/c1/b4/ed/c1b4ed5cbbe5ee462849828ef8fe01e3.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/190815154638-01-bugatti-centodieci.jpg?q=w_3164,h_1582,x_0,y_0,c_fill",
  ],
  Buick: [
    "https://cdn.wallpapersafari.com/20/61/lwBbof.jpg",
    "https://i.extremetech.com/imagery/content-types/061UlDfRsV9vWLwTIqeUMay/hero-image.fill.size_1200x675.jpg",
    "https://www.buick.com/content/dam/buick/na/us/en/index/owners/discover-buick/discontinued-vehicles/01-images/2023-buick-legacy-lacrosse-2000x1000-19BULA00081.jpg?imwidth=1200",
    "https://pictures.dealer.com/h/hirningbuickgmcpocatello/1864/b3cbd5f02f71c23b81ed041d9695a5e9x.jpg",
    "https://www.wyattjohnsongm.com/static/dealer-18551/buick-lacrosse.jpg",
    "https://di-uploads-pod5.s3.amazonaws.com/millerautoplaza/uploads/2016/03/2016-Buick-LaCrosse.png",
    "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2024BUS030006_01_1280_GAZ.png",
    "https://news.buick.com/content/dam/Media/images/US/Vehicles/Concepts/Buick/Wildcat/buick-wildcat-ev-concept-001.jpg",
  ],
  Cadillac: [
    "https://thumbs.dreamstime.com/b/cadillac-crest-field-stars-generative-ai-iconic-rendered-silver-standing-out-against-deep-blue-night-sky-328244871.jpg",
    "https://static01.nyt.com/images/2019/08/23/business/00cadillac3/00cadillac3-superJumbo.jpg",
    "https://www.autooutlet.cz/wp-content/uploads/2024/07/dsc00603-1298x730.jpg",
    "https://media.ed.edmunds-media.com/cadillac/ct5/2025/oem/2025_cadillac_ct5_sedan_premium-luxury_fq_oem_1_1600.jpg",
    "https://ik.imagekit.io/girnar/sayaratbay/large/gallery/exterior/5/72/cadillac-escalade-front-angle-low-view-631852.jpg",
    "https://cdn.motor1.com/images/mgl/0eNzJn/s1/4x3/cadillac-ct5-refresh-global-sales.webp",
    "https://www.cadillac.com/content/dam/cadillac/na/us/english/index/assistance/legacy/legacy-66015-18-cad-ct6-50128-v1-l.jpg?imwidth=1200",
    "https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/future-and-concept/future-vehicles/escalade-mcm/my25-escalade-mov-gallery-grid-exterior-front-grille-v2.jpg?imwidth=1200",
  ],
  Chevrolet: [
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ba484315-22f4-4083-8686-077baf8b1d5d/b97f97fe-1698-4fce-8fac-6735ff56432d.png",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/11q3/409396/new-cars-for-2012-chevrolet-full-lineup-info-photo-416017-s-original.jpg",
    "https://www.motortrend.com/uploads/sites/10/2024/01/2024-chevrolet-tahoe-lt-suv-angular-front.png?w=768&width=768&q=75&format=webp",
    "https://cdn-ds.com/media/sz_1174427/3410/2023_Chevrolet_Camaro_-_Pull_Me_Over_Red.png",
    "https://autoportal.com/cdn/media/cache/image_300x225/img/new-cars-gallery/chevrolet/camaro/photo34/chevrolet-camaro-79ed1401.jpg",
    "https://d2v1gjawtegg5z.cloudfront.net/uploads/files/000/926/322/original/2024-Chevrolet-Suburban.png?1717784848",
    "https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=700:*",
    "https://cars.ng/images/cars-ng/product_chevrolet_suburban_2022_332631_1.png",
  ],
  Citroën: [
    "https://www.focus2move.com/wp-content/uploads/2015/05/citroen-logo-wallpaper.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Citroen/C3/9894/1710232743367/front-left-side-47.jpg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/103611/exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Citroen-C5-Aircross-270320241251.jpg&w=872&h=578&q=75&c=1",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q4/638369/citroen-c4-cactus-first-drive-review-car-and-driver-photo-653647-s-original.jpg",
    "https://www.topgear.com/sites/default/files/cars-car/image/2023/09/C4_2021_EXT4.jpg",
    "https://gaadiwaadi.com/wp-content/uploads/2023/07/Citroen-C3X-Crossover-1.jpg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/188399/aircross-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  ],
  Dodge: [
    "https://di-uploads-development.dealerinspire.com/kendalldodgechryslerjeepram1/uploads/2018/01/logo-8.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159614882/2022_dodge_challenger_angularfront.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/dg024-040ch-65e74fca875ec.jpg?crop=1.00xw:1.00xh;0,0&resize=700:*",
    "https://www.slashgear.com/img/gallery/11-of-the-fastest-dodge-cars-ever-made-ranked-by-top-speed/l-intro-1727196758.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i158848285/2020_dodge_durango_angularfront.jpg",
    "https://fcatadvantage-com.cdn-convertus.com/uploads/sites/17/2023/08/Dodge-Means-Performance.jpg",
    "https://www.dodge.com/content/dam/cross-regional/asean/dodge/en_ph/2023/challenger/Challenger-GT-Go-Mango-lineup.png.img.500.png",
    "https://media.cnn.com/api/v1/images/stellar/prod/220817165501-01-dodge-electric-muscle-car.jpg?c=original",
  ],
  Ferrari: [
    "https://wallpapersok.com/images/high/scuderia-ferrari-logo-f9tfmoauaxlobmum.jpg",
    "https://storage.googleapis.com/pod_public/1300/166577.jpg",
    "https://blog.sothebysrealty.co.uk/hubfs/The%20Best%20Luxury%20Ferraris%20Of%20All%20Time-jpg.jpeg",
    "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/10/0/0/ferrari9.jpg?ve=1&tl=1",
    "https://etimg.etb2bimg.com/photo/101380711.cms",
    "https://trvlez.in/assets/img/ferrari-car/ferrari-car-02.jpg",
    "https://cdn.ferrari.com/cms/network/media/img/resize/631f431c482135455e01f05c-ferrari-purosangue-crop-line-up?width=800&height=600",
    "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.531xw:0.471xh;0.135xw,0.434xh&resize=1200:*",
  ],
  Ford: [
    "https://wallpapers.com/images/hd/ford-logo-1920-x-1150-wallpaper-kp76x0dtef8u9283.jpg",
    "https://www.germainfordofbeavercreek.com/static/dealer-18421/2025_ford_maverick_updated_model.webp",
    "https://kashgain.s3.amazonaws.com/assets/images/post/2024-11-03/1730622339-cost-of-clearing-cars-in-nigeria.jpeg",
    "https://hips.hearstapps.com/hmg-prod/images/2025-ford-expedition-stealth-performance-exterior-108-66fadf15d18f2.jpg",
    "https://images.hindustantimes.com/auto/img/2024/09/13/1600x900/New_Ford_Endeavour_Sport_1600758702877_1726215963036.jpg",
    "https://images.unsplash.com/photo-1670069247956-1a6dfee5338e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZCUyMGNhcnN8ZW58MHx8MHx8fDA%3D",
    "https://vehicle-images.dealerinspire.com/3b74-110008689/thumbnails/large/1FA6P8CF3R5429837/47bf02831cce8e20a7a2e9256da3b15f.jpg",
    "https://www.nairaland.com/attachments/10610015_newfordfocusrsrender_jpega37626d0034d2cdc1e0f296d6ed7a7aa",
  ],
  Genesis: [
    "https://di-uploads-pod10.dealerinspire.com/genesisofgolden/uploads/2021/11/tquxKlRgw71jwUWAeEbS7MYiTYa2GFnRAidQXvAY.jpg",
    "https://www.cnet.com/a/img/hub/2021/03/30/b76e0546-c922-4c92-a077-a533c511ab9b/genesis-x-ev-coupe-concept-110.jpg",
    "https://media.ed.edmunds-media.com/genesis/g70/2025/oem/2025_genesis_g70_sedan_33t-sport-advanced_fq_oem_1_1280.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2025-genesis-gv80-coupe-0410-66b0dbee1fdb9.jpg?crop=0.659xw:0.556xh;0.242xw,0.280xh&resize=2048:*",
    "https://www.edmunds.com/assets/m/cs/bltc077af0c4c5eb72c/6621fc1733301d592a890184/2024_genesis_g90_front.jpg",
    "https://www.genesis.com/content/dam/genesis-p2/kr/assets/genesis/concept-car/genesis-x-speedium-coupe/concept-car-genesis-x-speedium-coupe-gallery-exterior-03-pc-mo-1600x1200.jpg",
    "https://vehicle-images.dealerinspire.com/ad0d-110006331/KMTFC4SD9RU039640/f0350c6ddf063a6f24401097d5b6bdb9.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2025-genesis-gv80-149-6642229d26dcf.jpg",
  ],
  GMC: [
    "https://www.designyourway.net/blog/wp-content/uploads/2023/06/Featured-gmc.jpg",
    "https://www.shutterstock.com/image-photo/novosibirsk-russia-april-25-2023-600w-2313792979.jpg",
    "https://cars.usnews.com/static/images/Auto/custom/15336/2024_GMC_Sierra_2500HD_Angular_Front_1.jpg",
    "https://housinamericancars.com/wp-content/uploads/2023/11/Yukon_Movil.webp",
    "https://media.assets.sincrod.com/websites/content/gmps-anderson-md/progressive-2.0/fc5061f98c53491caa52c747eb9518a0_c153x0-1702x1280.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159615697/2023_gmc_terrain_angularfront.jpg",
    "https://www.gmcarabia.com/content/dam/gmc/middleeast/master/en/index/all-vehicles/2024/hummer-ev-pickup-trim.jpg?imwidth=960",
    "https://www.gmccanada.ca/content/dam/gmc/na/ca/en/index/crossovers-suvs/2024-terrain/01-images/2024-terrain-slt-volcanic-red-tintcoat-1000x563-2024-GMC-Terrain-Ext-SUV-AD-01-TXM26-4SA-GNT.jpg?imwidth=960",
  ],
  Honda: [
    "https://i.pinimg.com/736x/c8/38/e5/c838e5bc1553bd211225f997d4d1f0e9.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/new-honda-amaze-12191745-16x9_0.jpg?VersionId=2h7wgv_FhdndadERTzM0HsJ_02COgR4w&size=690:388",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80&q=80",
    "https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2024/10/2410-Honda-Civic-Si-lineup.webp",
    "https://media.ed.edmunds-media.com/honda/accord/2025/oem/2025_honda_accord_sedan_sport-l-hybrid_fq_oem_1_1600.jpg",
    "https://c.ndtvimg.com/2022-05/qtbvtv9g_car_625x300_13_May_22.jpg",
    "https://images.dealer.com/ddc/vehicles/2025/Honda/CR-V/SUV/trim_EX_485a60/color/Crystal%20Black%20Pearl-BK-29%2C29%2C29-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
    "https://di-uploads-pod3.dealerinspire.com/germainhondaofannarbor/uploads/2022/10/cr-v-hybrid.jpg",
  ],
  Hyundai: [
    "https://carfromjapan.com/wp-content/uploads/2019/05/79209857.jpg",
    "https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/display_images/1698924149.jpg",
    "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://kashgain.s3.amazonaws.com/assets/images/post/2024-11-03/1730623935-hyundai-car-buying-and-clearing-cost.jpeg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/41138/elantra-exterior-right-front-three-quarter.jpeg?q=80&q=80",
    "https://motoroctane.com/wp-content/uploads/2015/01/hyundai-creta.jpg",
    "https://images.dealer.com/ddc/vehicles/2024/Hyundai/Tucson/SUV/trim_SEL_e44003/color/Phantom%20Black-S3B-23%2C22%2C23-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  ],
  Infiniti: [
    "https://i.pinimg.com/originals/cc/33/55/cc3355b0e9d9e306fa5fe8e3783869b1.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2024-infiniti-qx50-103-jpg-66db1b9b7aaba.jpg?crop=0.779xw:0.781xh;0.188xw,0.0627xh&resize=2048:*",
    "https://www.slashgear.com/img/gallery/the-15-best-infiniti-cars-of-all-time/l-intro-1656097839.jpg",
    "https://www-europe.infiniti-cdn.net/content/dam/Infiniti/2022/RealignedVehicleImages/Profile/140722_QX80_Profile-Image_1536x864px.png",
    "https://di-uploads-pod17.dealerinspire.com/infinitioforlandpark/uploads/2018/09/q50.png",
    "https://content.homenetiol.com/stock_images/8/cc_2025INS15_01_640/cc_2025INS150031_01_640_GAT.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/infiniti-to-reveal-project-black-s-prototype-source-1538130197.jpg",
    "https://www.motortrend.com/uploads/sites/10/2023/11/2024-infiniti-qx55-luxe-4wd-suv-angular-front.png?w=768&width=768&q=75&format=webp",
  ],
  Isuzu: [
    "https://logos-world.net/wp-content/uploads/2021/09/Isuzu-Logo.png",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/48084/mu-x-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
    "https://www.isuzu.co.jp/world/newsroom/assets/img/20231006_1_im01.png",
    "https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/D-Max%20V-CrossModelImage.jpg&w=872&h=578&q=75&c=1",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/48084/mu-x-bs6-exterior-right-front-three-quarter.jpeg?q=80",
    "https://i.ytimg.com/vi/nY8g1YJZXW4/maxresdefault.jpg",
    "https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/isuzu-mu-x-exterior-6091020d1635a.jpg",
    "https://media.drive.com.au/obj/tx_rs:auto:1920:1080:1/driveau/upload/cms/uploads/t6z0t5a1kcshiki44dfm",
  ],
  Jaguar: [
    "https://banner2.cleanpng.com/20180804/gvt/465c7bf4735729693f2f5bc39c5ea31c.webp",
    "https://hips.hearstapps.com/hmg-prod/images/2024-jaguar-xf-p300-r-dynamic-101-64e8cdd02fc9a.jpg?crop=0.706xw:0.528xh;0.115xw,0.280xh&resize=640:*",
    "https://jlr.scene7.com/is/image/jlr/X26024GL_303101393_027",
    "https://cars.usnews.com/static/images/Auto/izmo/i159615088/2023_jaguar_f_type_angularfront.jpg",
    "https://bluesky-cogcms.cdn.imgeng.in/media/g3dds0yi/jaguar-xf.png",
    "https://di-uploads-pod18.dealerinspire.com/germainjaguar/uploads/2020/06/JE_2021-Jaguar-F-Type.jpg",
    "https://di-uploads-pod18.dealerinspire.com/germainjaguar/uploads/2020/06/JE_2021-Jaguar-F-Type.jpg",
    "https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1597325439873-exteriorimages.jpg",
  ],
  Jeep: [
    "https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/174975/wrangler-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
    "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/vehicle-lineup/compass-lineup.png.img.500.png",
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/jeep-wrangler-review-2024-01-cornering-front.jpg",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/132711/grand-cherokee-exterior-right-front-three-quarter.jpeg?isig=0",
    "https://media.ed.edmunds-media.com/jeep/wrangler/2024/oem/2024_jeep_wrangler_convertible-suv_rubicon-392-final-edition_fq_oem_1_1280.jpg",
    "https://media.motorfuse.com/img.cfm/type/3/img/0F16CD4A4F02DEDFC0E6AFCEC12C0A10F5CB41",
    "https://cars.usnews.com/static/images/Auto/izmo/i159615407/2023_jeep_grand_cherokee_angularfront.jpg",
  ],
  Kia: [
    "https://media.gettyimages.com/id/163412878/photo/geneva-switzerland-the-kia-logo-is-seen-during-the-83rd-geneva-motor-show-on-march-6-2013-in.jpg?s=612x612&w=gi&k=20&c=yAbtEqtX7mfI4Yu6OhgAazisHwgGeRpfXUEVACo4krw=",
    "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-proceed-gtl-my22-v3-520x260.png",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230316054506_Kia_Seltos_adjust.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159615165/2023_kia_stinger_angularfront.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg/640px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg",
    "https://pictures.dealer.com/n/napletonkiaofcarmelkia/1234/fc156bd476004117b3444c6a3caf20ef.jpg?impolicy=downsize_bkpt&w=380",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0",
    "https://www.capitalkia.in/uploads/common/20220808165996066562f0fd59b059c.jpg",
  ],
  Koenigsegg: [
    "https://moneyinc.com/wp-content/uploads/2018/05/Koenigsegg-Logo.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/koenigsegg-jesko-101-1551799580.jpg",
    "https://www.topgear.com/sites/default/files/images/news-article/2019/01/dfeb7f2af3355f55796bda3e86b8d6ed/row_9371.jpg",
    "https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/514x200/azure/2022-01/Agera.jpg?h=ef395871&itok=HHxzdbW8",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/2015_Koenigsegg_Agera_N_%2819886243212%29.jpg",
    "https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1714648204527-blob&w=3840&q=100",
    "https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/514x200/azure/2022-03/AGERA%20S%20HUNDRA.png?h=8f3d40f1&itok=lNX66hd0",
    "https://www.supervettura.com/blobs/Cars/130/4697b121-9f2e-48d4-a079-b4ccf89ed858.jpg?width=1000&height=563",
  ],
  Lamborghini: [
    "https://e7.pngegg.com/pngimages/220/126/png-clipart-lamborghini-logo-emblem-logo-thumbnail.png",
    "https://m.media-amazon.com/images/I/61C0rycpecL.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G1wtSYkjKpI-50cD0BBAndCYUs4-k0zmXg&s",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
    "https://storage.googleapis.com/pod_public/750/176804.jpg",
    "https://pugachev.miami/wp-content/uploads/2019/11/Rent-Lamborghini-Aventador-Matte-in-Miami-1_obr2.jpg",
    "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/1:1/w_2000,h_2000,c_limit/DSC_5903.jpg",
    "https://i.ytimg.com/vi/WOUOzu14mn0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC8GttGKMRVJEnMHVTAKkgvwd7yA",
  ],
  Land_Rover: [
    "https://logolist.ru/uploads/posts/2016-04/0_land_rover_logo.jpg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Land-Rover-Range-Rover-Velar-120420241604.jpg&w=872&h=578&q=75&c=1",
    "https://media.wired.com/photos/5a9ee7f252430e4b5eb94976/master/w_2560%2Cc_limit/RangeRoverCoupe-TopArt.jpg",
    "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221125204845/Land-Rover-SUV-jpg.webp",
    "https://media.ed.edmunds-media.com/land-rover/range-rover/2025/oem/2025_land-rover_range-rover_4dr-suv_p530-autobiography_fq_oem_1_1600.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159615089/2023_land_rover_discovery_angularfront.jpg",
    "https://cdn.prod.website-files.com/655bd943f51b8c3a30acc22e/661ee4a5c67e08f0cd815e95_How%20Long%20Will%20Your%20Land%20Rover%20Last_%20Read%20to%20Know%20More-1.webp",
  ],
  Lexus: [
    "https://banner2.cleanpng.com/20180331/oww/avipxs5ld.webp",
    "https://www.lexusindia.co.in/content/dam/lexus-v3-india/price-list/lexus-nx-350h-overview_1200x600.jpg",
    "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/138195/lx-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://www.usnews.com/object/image/0000018e-540b-d700-a1bf-d4bbf26e0001/01-2024-lexus-lc-angular-front-jmv.JPG?update-time=1710807088726&size=responsive640",
    "https://discoverlexus.com/_nuxt/assets/nx2022_40-6801e9.png",
    "https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/homepage/content-tile/2025/Lexus-RZ-homepage-tile-750x460-LEX-RZV-MY24-0001-02.jpg?wid=750&hei=460",
    "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/KkouDDS7kjXC4C9gpp4LUsOTPSUsKsWbuJNVVTFY.jpg",
    "https://d.newsweek.com/en/full/1985989/lexus-bev-sport.jpg?w=1600&h=900&q=88&f=68e5a168d0a0a929ccf810509add6add",
  ],
  Lincoln: [
    "https://e7.pngegg.com/pngimages/975/654/png-clipart-lincoln-motor-company-lincoln-town-car-ford-motor-company-lincoln-angle-logo.png",
    "https://www.carscoops.com/wp-content/uploads/2024/09/Lincoln-1024x576.jpg",
    "https://www.lincoln.com/is/image/content/dam/vdm_ford/live/en_us/lincoln/nameplate/corsair/2025/collections/dm/P_10727_CORSAIR_VITRINE_2025_300A_jetpack.tif?croppathe=1_3x2&wid=1440",
    "https://hips.hearstapps.com/hmg-prod/images/lincoln-star-concept-102-1650471258.jpg?crop=0.770xw:0.866xh;0.164xw,0.0586xh&resize=2048:*",
    "https://imgd.aeplcdn.com/1280x720/cw/ec/28668/Ford-Endeavour-Driving-94706.jpg?wm=0",
    "https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/blt9276aee04b35c216/63abee9f68d9314b6911aee6/Lincoln-Model-L100-Concept-Exterior-1.jpeg",
    "https://www.joerizzalincolnoforlandpark.com/static/dealer-21183/images/25-Aviator-trim.jpg",
    "https://www.lexingtonparklincoln.com/blogs/4088/wp-content/uploads/2021/11/Lincoln-Navigator.jpg",
  ],
  Lotus: [
    "https://banner2.cleanpng.com/20180415/drw/avfq1it42.webp",
    "https://hips.hearstapps.com/hmg-prod/images/2017-lotus-evora-mmp-1545850193.jpg?crop=0.8148148148148148xw:1xh;center,top&resize=1200:*",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHXNXQXN1QJQ/v0/-1x-1.webp",
    "https://www.motorcarclassics.com/galleria_images/463/463_main_l.jpg",
    "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/08/LotusEvoraGT-2-2048x1366-1.jpg",
    "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/bf883407872310408d64e8ba0939966b",
    "https://c.files.bbci.co.uk/18126/production/_119289589_lotusemira.jpg",
    "https://images.barrons.com/im-243674/social",
  ],
  Maserati: [
    "https://icon2.cleanpng.com/20180905/fzg/kisspng-maserati-levante-car-maserati-mc12-luxury-vehicle-dorabianie-kluczykw-do-samochodu-awaryjne-otwie-1713943916861.webp",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/186189/granturismo-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
    "https://maserati.scene7.com/is/image/maserati/maserati/international/Models/default/2024/grancabrio/versions/GC_FO_Front.png?$800x2000$&fmt=png-alpha&fit=constrain",
    "https://www.topgear.com/sites/default/files/cars-car/image/2024/02/1-Maserati-GranTurismo.jpg?w=1280&h=720",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maserati/Ghibli/7552/1582365598262/front-left-side-47.jpg",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240830122821_2%20_11_.png&w=700&c=1",
    "https://hips.hearstapps.com/hmg-prod/images/2024-maserati-granturismo-trofeo-104-1664572237.jpg",
    "https://www.motortrend.com/uploads/2022/11/2023-Maserati-MC20-Cielo-17.jpg",
  ],
  Mazda: [
    "https://static.usedcars.co.ke/wp-content/uploads/sites/9/2022/02/07153218/mazda-logo-new-1-1024x576.jpg",
    "https://cars.usnews.com/static/images/Auto/izmo/i159614548/2021_mazda_mx_5_miata_rf_angularfront.jpg",
    "https://images.dealer.com/ddc/vehicles/2022/Mazda/CX-5/SUV/still/front-left/front-left-480-en_US.jpg?impolicy=downsize_bkpt&w=380",
    "https://filecache.mediaroom.com/mr5mr_mazdausa2/218423/2021-Mazda6_Carbon-Edition_01-1-1024x683.jpg",
    "https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-34.jpeg?w=768&width=768&q=75&format=webp",
    "https://assets.stoneacre.co.uk/8700054/Mazda-2-Homura-Red-1250x750.jpg?webp",
    "https://automotivedoctor.co.ke/wp-content/uploads/2024/08/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg",
    "https://di-uploads-pod42.dealerinspire.com/jerryseinermazda/uploads/2023/06/mazda3.png",
  ],
  McLaren: [
    "https://www.pcarmarket.com/static/media/uploads/galleries/photos/uploads/galleries/41063-chicagofinest/.thumbnails/McLaren_Sign_2_cover.webp/McLaren_Sign_2_cover-tiny-1200x0.webp",
    "https://www.thecollection.com/wp-content/uploads/2024/02/1-3-1024x576.png",
    "https://hips.hearstapps.com/hmg-prod/images/original-16833-5-mclaren-w1-front-3q-high-6702aa0704f4b.jpg?crop=0.724xw:1.00xh;0.138xw,0&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/2022-mclaren-765lt-spider-115-1652724748.jpg",
    "https://mclaren.scene7.com/is/image/mclaren/650S%20GT3%20STUDIO-11:crop-4x3?wid=1920&hei=1440",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mclaren/750-s/9929/1682577543178/front-left-side-47.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/800px-McLaren_P1.jpg",
    "https://sbraceengineering.co.uk/wp-content/uploads/Mclaren-675LT-1500x630.webp",
  ],
  Mercedes_Benz: [
    "https://masterpiecer-images.s3.yandex.net/7b1ddacdb07e11ee8a563abd0be4d755:upscaled",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA-2024/9731/1679039244149/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    "https://klassen.eu/media/vehicles/medium/s07564hl6tf1sn6d6w7e8zga8bhethri.jpg",
    "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1920,h_873/auto-client/ffb13024ab604200c8ec9d04dfa3b12b/mercedes_benz_gle_coupe_c167_stage_3840x1707_01_2023.jpg",
    "https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2021/09/2021-GLA.jpg",
    "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1280.jpg",
    "https://globemotors.ng/wp-content/uploads/2023/11/76bc8dc96d81a9b183f1f4d6f3b2bca7.webp",
    "https://assets.newatlas.com/dims4/default/14b9a2a/2147483647/strip/true/crop/1024x683+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fmercbiome.jpg",
  ],
  Mini: [
    "https://w7.pngwing.com/pngs/472/611/png-transparent-mini-cooper-bmw-car-mercedes-benz-cars-logo-brands-emblem-logo-mini.png",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/180421/cooper-s-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80&q=80",
    "https://image.made-in-china.com/2f0j00twacUigYJkoZ/Novice-Car-Mini-Electric-EV-Cars-New-Pony-Bestune-with-Cheap-Price.webp",
    "https://images.prismic.io/carwow/ZtCYKUaF0TcGJhru_mini-cooper-2024-rhd-front34dynamic2.jpg",
    "https://www.miniusa.com/content/dam/mini/homepage/2024/july/gallery-lineup/4Doors_exterior.png",
    "https://www.miniusa.com/content/dam/mini/homepage/2024/july/gallery-lineup/4Doors_exterior.png",
    "https://sc04.alicdn.com/kf/Hc7f13f51f3c4483f931b26c06efd23a4G.jpg",
    "https://static.designboom.com/wp-content/uploads/2023/06/ark-zero-electric-car-designboom-00.jpg",
  ],
  Mitsubishi: [
    "https://www.x-sticker.com/web/files/products/14295/thumb_960x960_image_1.jpg",
    "https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/homepage/2024-mitsubishi-outlander-silver-dealer.jpg",
    "https://www.mitsubishi-motors.com.ng/media/gamme/modeles/images/ae617bdb6c305d69fce1c74d17dc54e9.jpeg",
    "https://www.motortrend.com/uploads/sites/10/2024/01/2024-mitsubishi-eclipse-cross-se-4wd-suv-angular-front.png?w=768&width=768&q=75&format=webp",
    "https://www.mitsubishi-motors.com/en/products/img/pajero_sport.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2015-mitsubishi-lancer-evolution-final-edition-101-1557840018.jpg",
    "https://di-uploads-pod7.dealerinspire.com/verneidemitsubishi/uploads/2022/08/2022MitsuMirage.png",
    "https://www.eastsidemitsubishi.com.au/images/news/2023/dec/lancer-evo-2.jpg",
  ],
  Nissan: [
    "https://wallpapers.com/images/hd/nissan-automotive-brand-logo-gcfu8m53losfzum1.png",
    "https://hips.hearstapps.com/hmg-prod/images/2022-nissan-rogue-sport-1630609852.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/X-Trail/3372/1666087743726/front-left-side-47.jpg",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0",
    "https://media.motorfuse.com/img.cfm/type/3/img/0F16CD4A4E04D8DEC2E6AAC0C0250110F5CB41",
    "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/magnite/overview/Nissan-Magnite-Digital-Resize-Image-1050x1200_range_061224.jpg.ximg.l_12_m.smart.jpg",
    "https://www.motortrend.com/uploads/sites/10/2023/06/2023-nissan-sentra-sv-sedan-angular-front.png?w=768&width=768&q=75&format=webp",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Nissan-Magnite-141020241918.jpg&w=872&h=578&q=75&c=1",
  ],
  Opel: [
    "https://www.designyourway.net/blog/wp-content/uploads/2023/05/Featured-1-14.jpg",
    "https://cdn.britannica.com/87/236087-050-0B3CA1AA/Opel-Mokka-crossover-SUV-Opel-AG.jpg",
    "https://s1.cdn.autoevolution.com/images/models/OPEL_Astra-GSe-2022_main.jpg",
    "https://www.opel.ie/content/dam/opel/master/experience-opel/concept-cars/manta-gse/opel_manta-gse_exterior-front_4x3_515665.jpg?imwidth=768",
    "https://stellantis3.dam-broadcast.com/medias/domain12808/media102872/861751-5osp8cyraq-whr.jpg",
    "https://eu-images.contentstack.com/v3/assets/blt7121b6ec5c11097b/blt6074bf045d3f76fb/66199a163ba8b28dff3b9d6d/opel-small-cars-rocks-main-art.jpg",
    "https://s1.cdn.autoevolution.com/images/models/OPEL_Mokka-e-2020_main.jpg",
    "https://www.opelegypt.net/content/dam/opel/egypt/vehicles/mokka/my-25/mokka--mob.jpg?imwidth=768",
  ],
  Pagani: [
    "https://1000logos.net/wp-content/uploads/2020/04/Pagani-Logo-1992.png",
    "https://i.ytimg.com/vi/RFK3figANvQ/hqdefault.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/637c11dad9b00787c3ea598c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "https://static.autox.com/uploads/2024/02/Pagani-Huayra-R-Evo-Front-view.jpg",
    "https://cdn.motor1.com/images/mgl/1ZEpmp/s3/pagani-zonda-760-roadster-diamante-verde.jpg",
    "https://icon.ink/wp-content/uploads/sites/5/2018/08/zonda-4.jpg",
    "https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1726844045699-blob&w=3840&q=100",
    "https://cdn.thespaces.com/wp-content/uploads/2021/08/Pagani-Zonda-R-Evolution-supercar-for-sale-via-RM-Sothebys-hero.jpg",
  ],
  Peugeot: [
    "https://i.pinimg.com/originals/8e/c4/8a/8ec48a7aa834958873734bcd2565ae0c.jpg",
    "https://me.peugeot.com/content/dam/peugeot/saudi_arabia/homepage/Carousel/peugeot-408-mob-950x1332-en-updated.jpg?imwidth=768",
    "https://www.peugeot.co.uk/content/dam/peugeot/master/b2c/our-range/showroom/208/2023-10-new-208/208-gt-hybrid-artense.png",
    "https://s1.cdn.autoevolution.com/images/models/PEUGEOT_508-2023_main.jpg",
    "https://i.guim.co.uk/img/media/a36eb1af35504bfcb0a25980e2e844b34dd431cc/545_769_3558_2135/master/3558.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=43ec1e366c0d1e25bf2a577d030985fa",
    "https://www.motortrend.com/uploads/sites/5/2019/03/Peugeot-508-Sport-Engineered-concept-front-side-view.jpg",
    "https://i.ytimg.com/vi/Lyb8Y_pWXYc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAP9u5HqPVxajeHshUObekJdTNciA",
    "https://www.topgear.com/sites/default/files/2023/10/1-Peugeot-e-308.jpg",
  ],
  Porsche: [
    "https://static.vecteezy.com/system/resources/previews/020/502/602/non_2x/porsche-brand-logo-car-symbol-with-name-yellow-design-german-automobile-illustration-with-red-background-free-vector.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/11757/1717680690776/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    "https://images-porsche.imgix.net/-/media/0B3F90A75B0141FF8BED694C3C1A323B_7C02423B08CB49C8801E208B2D16A51E_CZ25W18OX0004-911-gt3-white-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format",
    "https://images.opumo.com/wordpress/wp-content/uploads/2023/08/spider.png",
    "https://www.jamesedition.com/stories/wp-content/uploads/2021/05/2-2.png",
    "https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Porsche%20911%20GT1%20Stra%C3%9Fenversion-jpeg.jpeg?width=1168&height=704&name=Porsche%20911%20GT1%20Stra%C3%9Fenversion-jpeg.jpeg",
    "https://www.jamesedition.com/stories/wp-content/uploads/2021/05/6-1.png",
    "https://fisherluxuryrental.com/wp-content/uploads/2024/01/Is-Porsche-an-Exotic-Car.jpg",
  ],
  RAM: [
    "https://logos-world.net/wp-content/uploads/2021/12/Ram-Logo.png",
    "https://hips.hearstapps.com/hmg-prod/images/2025-ram-1500-limited-crew-cab-4x4-115-67224ad21ff7c.jpg?crop=0.746xw:0.839xh;0.117xw,0.0951xh&resize=768:*",
    "https://i.ytimg.com/vi/W9CvE1BXK2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmViN5AAlKhO1cxCZNriUJnRi_nw",
    "https://medias.fcacanada.ca/jellies/renditions/2025/800x510/CC25_DT6L41_2TA_PRV_APA_XXX_XXX_XXX.729adda1052145c5b02905c8893fe0d3.png",
    "https://i.gaw.to/content/photos/48/91/489138-ram-devoile-son-camion-le-plus-cher-et-le-plus-exclusif-a-ce-jour.jpg",
    "https://americancarsandracing.com/wp-content/uploads/2024/09/ram-hd-1120x630.jpg",
    "https://www.ramtrucks.com/content/dam/fca-brands/na/ramtrucks/en_us/vehicle-selector/2025/my25-ram-rho.jpg",
    "https://images.carexpert.com.au/crop/800/533/app/uploads/2023/11/2024-ram-1500-laramie-sport-20.jpg",
  ],
  Renault: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2009_logo.svg/2048px-Renault_2009_logo.svg.png",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1717586320303/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/141145/triber-right-front-three-quarter-2.jpeg?isig=0&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Renault-Kwid.jpg&w=872&h=578&q=75&c=1",
    "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220316110925/Renault-Triber.jpg",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/141857/kiger-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    "https://assets.renaultgroup.com/uploads/2024/11/marque-renault-embleme-mobile.jpg",
    "https://content.carlelo.com/source/IMG-20221105-WA0022.jpg",
  ],
  Rolls_Royce: [
    "https://banner2.cleanpng.com/20180512/gqq/avcefeak8.webp",
    "https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Gold%20Rolls%20Royce%20Phantom%20Limousine-jpg.jpeg?width=1600&height=930&name=Gold%20Rolls%20Royce%20Phantom%20Limousine-jpg.jpeg",
    "https://i.ytimg.com/vi/jEKwh5GG3iA/sddefault.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-cullinan-black-badge-107-663a56d913506.jpg",
    "https://mediapool.bmwgroup.com/cache/P9/202408/P90564792/P90564792-phantom-scintilla-600px.jpg",
    "https://ik.imagekit.io/girnar/sayaratbay/medium/gallery/exterior/34/2133/rolls-royce-spectre-11030.jpg",
    "https://www.topgear.com/sites/default/files/cars-car/image/2017/10/_jl58227.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-ghost-ii-29-67053b7543813.jpg?crop=0.580xw:0.438xh;0.260xw,0.391xh&resize=2048:*",
  ],
  Subaru: [
    "https://images.pond5.com/subaru-logo-loop-footage-085876052_iconl.jpeg",
    "https://s7d1.scene7.com/is/image/scom/RUG_default_pass_scaled_low?$850p$",
    "https://cdn.sanity.io/images/n5z5pg8m/production/65bd99e5455b5e4183bf82c79931238f4a4d0cc0-5472x3648.jpg?w=3840&auto=format",
    "https://s7d1.scene7.com/is/image/scom/SAG_default_pass_scaled_low?$850p$",
    "https://vehicle-images.dealerinspire.com/2bb9-110010081/JF1GUAFC1R8864215/670d746ed48f0cd3cd142508881f48d9.jpg",
    "https://pictures.dealer.com/generic--OEM_VIN_STOCK_PHOTOS/530d441536f1bdffaf537fe716f8d845.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
    "https://hips.hearstapps.com/hmg-prod/images/2024-subaru-imprezars102-64258a8412f3b.jpg?crop=0.514xw:0.578xh;0.399xw,0.295xh&resize=768:*",
    "https://imgd.aeplcdn.com/642x336/n/cw/ec/114091/subaru-left-front-three-quarter2.jpeg?isig=0&wm=1&q=80",
  ],
  Suzuki: [
    "https://banner2.cleanpng.com/20180409/cdq/avgyap7wa.webp",
    "https://imgd.aeplcdn.com/211x211/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Maruti%20Suzuki-Ignis-180220201708.jpg&w=350&h=250&q=85&c=1",
    "https://www.financialexpress.com/wp-content/uploads/2022/10/2022-Maruti-Suzuki-Baleno-Facelift-1-1.webp?w=1024",
    "https://cdn.suzuki.co.uk/suzuki-gb/zvljciht/swift1-2.png?width=640&quality=75&format=webp",
    "https://c.ndtvimg.com/2024-12/3nvb719_maruti-suzuki-dzire_625x300_06_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    "https://cdn.businessday.ng/2023/09/Suzuki-by-CFAO.png",
    "https://kalyanimotorsadmin.kalyanicrm.com/storage/model_image/FQqhUiGIir_1645083297.jpg",
  ],
  Tesla: [
    "https://blog.logomaster.ai/hs-fs/hubfs/tesla-logo-shield.jpg?width=672&height=454&name=tesla-logo-shield.jpg",
    "https://blog.logomaster.ai/hs-fs/hubfs/tesla-logo-shield.jpg?width=672&height=454&name=tesla-logo-shield.jpg",
    "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/37138/model-3-exterior-left-front-three-quarter.jpeg?isig=0&q=80&q=80",
    "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FC5VWTX545NJBXCEPCIBL5WB7QE.jpg?auth=f4b10b37b7554e3f0219ac7b5e8ca75d84214c7573e449fd0b9bec2591f778bb&width=5229&quality=80",
    "https://www.ecoticias.com/en/wp-content/uploads/2024/10/Tesla-Elon-Musk-Teslarati.jpg",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FNews%2Ftesla_model_x.jpg&c=0",
    "https://c.files.bbci.co.uk/1b1f/live/57cf8850-3881-11ef-b390-fb401932e653.jpg",
    "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240229122047_Tesla_Roadster.jpg&w=700&c=1",
  ],
  Toyota: [
    "https://img.freepik.com/premium-photo/evolution-reliability-tracing-journey-toyota-logo-through-innovation-design_1086226-2478.jpg?w=360",
    "https://blog.naijaspider.com/wp-content/uploads/2024/05/Toyota.jpg.webp",
    "https://s3.amazonaws.com/communicate.darwill.com/Image+Uploads/Peter+Boulware+Toyota/2024-toyota-camry-mrp3.JPG",
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?impolicy=resize&imwidth=480",
    "https://www.mylescars.com/blog/wp-content/uploads/2024/03/Toyota-Camry.jpg",
    "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg?q=80",
    "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=2048:*",
    "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=2048:*",
  ],
  Volkswagen: [
    "https://upload.wikimedia.org/wikinews/en/d/d3/Volkswagen_logo.png",
    "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/144691/taigun-right-front-three-quarter-2.jpeg?isig=0&q=80",
    "https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-jetta-107-6679be9c4f143.jpg?crop=0.780xw:0.659xh;0.111xw,0.255xh&resize=2048:*",
    "https://imgd.aeplcdn.com/211x211/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80&q=80",
    "https://uploads.vw-mms.de/system/production/images/vwn/036/745/images/a12520194e5093241a5a73238cf7cc511cb90264/DB2021AU00471_web_1600.jpg?1658139610",
    "https://cars.usnews.com/static/images/Auto/izmo/i159614521/2021_volkswagen_arteon_angularfront.jpg",
    "https://assets.volkswagen.com/is/image/volkswagenag/T-CrossPA3-4View?Zml0PWNyb3AsMSZmbXQ9d2VicC1hbHBoYSZxbHQ9Nzkmd2lkPTgwMCZiZmM9b2ZmJjU0MDQ=",
    "https://www.vwannarbor.com/static/dealer-12429/fixed/Volkswagen-Atlas-Lineup---2308.jpg",
  ],
  Volvo: [
    "https://logowik.com/content/uploads/images/325_volvo.jpg",
    "https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blt0528259f01b57749/66901148853fc5dc11da3067/xc90-fuel-gallery-2-4x5.jpg?branch=prod_alias&auto=avif&quality=85&format=webp&h=1080&iar=0&w=864",
    "https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/XC90ModelImage.jpg&w=872&h=578&q=75&c=1",
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/131145/s90-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    "https://carstreetindia.com/blogs/wp-content/uploads/2023/07/volvo-xc90-1920x1280.jpg",
    "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fvolvo%2Fv40%2Fvolvo-v40.jpg%3Fv%3D13&w=3840&q=75",
    "https://content.carlelo.com/uploads/model/volvo-xc90-1.webp",
    "https://static.autox.com/uploads/2022/09/Volvo-XC60-MHEV.jpg",
  ],
  Wiesmann: [
    "https://logos-world.net/wp-content/uploads/2021/11/Wiesmann-Symbol.png",
    "https://cdn.motor1.com/images/mgl/9m930b/s3/wiesmann-project-thunderball.jpg",
    "https://wiesmann.com/cdn/shop/files/MF5_3_3X2_4456ef5b-6c42-468b-ab61-6c050ccb1913.jpg?v=1650620436&width=1500",
    "https://wiesmann.com/cdn/shop/files/girl_4_b8ec45df-6920-416c-9f35-b468bcb1f96a.png?v=1687532606&width=1500",
    "https://www.secret-classics.com/wp-content/uploads/2020/09/wiesmannmf4gtrm19-04.jpg",
    "https://monochrome-watches.com/wp-content/uploads/2022/10/Wiesmann-Project-Thunderball-EV-Roadster-6.jpg",
    "https://autodesignmagazine.com/wp-content/uploads/2023/03/Wiesmann-Limited-Edition-Concept_1_Front-3_4.jpg",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1651062787/autoexpress/2022/04/Weismann%20Thunderball.jpg",
  ],
  Zenvo: [
    "https://i.pinimg.com/originals/2e/80/34/2e80349dd622c1d09ac6087671f50d41.jpg",
    "https://cdn.motor1.com/images/mgl/9mNnLm/s3/zenvo-aurora.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/2009_Zenvo_ST1.jpg/1200px-2009_Zenvo_ST1.jpg",
    "https://www.topgear.com/sites/default/files/cars-car/image/2021/05/zenvo_edit0003.jpg",
    "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/05/row02554.jpg",
    "https://www.ultimatecarpage.com/images/car/3961/Zenvo-ST1-51717.jpg",
    "https://mascotsitecore-1ccb8.kxcdn.com/32F4EC7536854E1A86235D0EEDE461AD-EN.JPG",
    "https://hips.hearstapps.com/hmg-prod/images/zenvo-tsr-s-101-1567614705.jpg?crop=0.748xw:0.816xh;0.0691xw,0.0706xh&resize=640:*",
  ],
  // Add other brands here...
};

// Logic for the homepage
if (document.body.id === "home") {
  const carBrandsContainer = document.getElementById("car-brands");

  if (brands.length === 0) {
    carBrandsContainer.innerHTML = "<p>No car brands available.</p>";
  } else {
    brands.forEach((brand) => {
      const link = document.createElement("a");
      link.href = `carousel.html?brand=${brand}`;
      link.textContent = brand;
      link.className = "brand";
      carBrandsContainer.appendChild(link);
    });
  }
}

// Logic for the carousel page
if (document.body.id === "carousel") {
  const urlParams = new URLSearchParams(window.location.search);
  const brand = urlParams.get("brand");
  const brandName = document.getElementById("brand-name");
  const displayDiv = document.getElementById("display-div");
  const previousBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");

  if (brand && carImages[brand]) {
    brandName.textContent = `${brand} Cars`;
    let index = 0;

    // Function to update the displayed image
    function updatePicture() {
      displayDiv.innerHTML = `<img src="${carImages[brand][index]}" alt="${brand} Car ${index + 1}" />`;
    }

    // Event listeners for carousel buttons
    previousBtn.addEventListener("click", () => {
      index = (index - 1 + carImages[brand].length) % carImages[brand].length;
      updatePicture();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % carImages[brand].length;
      updatePicture();
    });

    // Initialize the carousel
    updatePicture();
  } else {
    brandName.textContent = "Brand Not Found";
    displayDiv.innerHTML = "<p>No images available for this brand.</p>";
    previousBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}

function navigateHome() {
  window.location.href = "index.html";
}


if (document.body.id === "carousel") {
  // Handle carousel logic
  const urlParams = new URLSearchParams(window.location.search);
  const brand = urlParams.get("brand");
  const brandName = document.getElementById("brand-name");
  const displayDiv = document.getElementById("display-div");
  const previousBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");

  if (brand && carImages[brand]) {
    brandName.textContent = `${brand} Cars`;
    let index = 0;

    function updatePicture() {
      displayDiv.innerHTML = `<img src="${
        carImages[brand][index]
      }" alt="${brand} Car ${index + 1}" />`;
    }

    function showPreviousImage() {
      index = (index - 1 + carImages[brand].length) % carImages[brand].length;
      updatePicture();
    }

    function showNextImage() {
      index = (index + 1) % carImages[brand].length;
      updatePicture();
    }

    previousBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);

    // Add keyboard navigation
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        showPreviousImage();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      }
    });

    updatePicture();
  } else {
    brandName.textContent = "Brand Not Found";
  }
}
