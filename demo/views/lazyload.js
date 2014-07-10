﻿define(['View', getViewTemplatePath('lazyload'), 'cLazyload'], function (View, viewhtml, cLazyload) {

  return _.inherit(View, {
    onCreate: function () {
      this.$el.html(viewhtml);

    },

    events: {
      'click .demo1': 'demo1'
    },

    demo1: function() {

      if (!this.sss) {
        var imgsArr =  "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='534982'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/17000/16393/0a36fcbbed604f5793d736f20d4ef327_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='393916'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/634/3732a505564540c888f8ef7cba0ce0bc_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='435639'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/717/f51bb87a188c4fb6b35e3928f49605af_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='480779'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/6000/5835/61336F71252F460792EE5B3B20293BCE_130_130.Jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='436248'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/709/50F737E2-425E-422A-8E47-4D82F52E1949_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='430852'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/22000/21329/a81715e00d5244d4bee8273e82ae0fae_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='434019'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/49000/48895/C975B2F1-4E00-4F86-886D-DFD416EE34FD_130_130.jpg' width='96' height='96' ></div></li>"+

                "<li class='js_hotel_detail' data-hotelid='486701'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/23000/22573/9afb0b0259ae473082737198ff664a27_130_130.jpg' width='96' height='96' ></div></li>" +
                "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='534982'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/17000/16393/0a36fcbbed604f5793d736f20d4ef327_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='393916'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/634/3732a505564540c888f8ef7cba0ce0bc_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='435639'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/717/f51bb87a188c4fb6b35e3928f49605af_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='480779'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/6000/5835/61336F71252F460792EE5B3B20293BCE_130_130.Jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='436248'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/709/50F737E2-425E-422A-8E47-4D82F52E1949_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='430852'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/22000/21329/a81715e00d5244d4bee8273e82ae0fae_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='434019'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/49000/48895/C975B2F1-4E00-4F86-886D-DFD416EE34FD_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='486701'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/23000/22573/9afb0b0259ae473082737198ff664a27_130_130.jpg' width='96' height='96' ></div></li>";

                "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='534982'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/17000/16393/0a36fcbbed604f5793d736f20d4ef327_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='393916'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/634/3732a505564540c888f8ef7cba0ce0bc_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='435639'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/717/f51bb87a188c4fb6b35e3928f49605af_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='480779'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/6000/5835/61336F71252F460792EE5B3B20293BCE_130_130.Jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='436248'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/709/50F737E2-425E-422A-8E47-4D82F52E1949_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='430852'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/22000/21329/a81715e00d5244d4bee8273e82ae0fae_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='434019'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/49000/48895/C975B2F1-4E00-4F86-886D-DFD416EE34FD_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='486701'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/23000/22573/9afb0b0259ae473082737198ff664a27_130_130.jpg' width='96' height='96' ></div></li>";

                "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='534982'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/17000/16393/0a36fcbbed604f5793d736f20d4ef327_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='393916'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/634/3732a505564540c888f8ef7cba0ce0bc_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='435639'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/717/f51bb87a188c4fb6b35e3928f49605af_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='480779'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/6000/5835/61336F71252F460792EE5B3B20293BCE_130_130.Jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='436248'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/709/50F737E2-425E-422A-8E47-4D82F52E1949_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='430852'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/22000/21329/a81715e00d5244d4bee8273e82ae0fae_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='434019'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/49000/48895/C975B2F1-4E00-4F86-886D-DFD416EE34FD_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='486701'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/23000/22573/9afb0b0259ae473082737198ff664a27_130_130.jpg' width='96' height='96' ></div></li>";

                "<li class='js_hotel_detail' data-hotelid='439749'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/65000/64164/1684EC16-8A01-4B39-814C-C4C4537CF790_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='534982'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/17000/16393/0a36fcbbed604f5793d736f20d4ef327_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='393916'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/634/3732a505564540c888f8ef7cba0ce0bc_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='435639'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/717/f51bb87a188c4fb6b35e3928f49605af_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='480779'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/6000/5835/61336F71252F460792EE5B3B20293BCE_130_130.Jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='436248'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/1000/709/50F737E2-425E-422A-8E47-4D82F52E1949_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='430852'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/22000/21329/a81715e00d5244d4bee8273e82ae0fae_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='434019'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/49000/48895/C975B2F1-4E00-4F86-886D-DFD416EE34FD_130_130.jpg' width='96' height='96' ></div></li>"+
                "<li class='js_hotel_detail' data-hotelid='486701'><div class='hotel-g-proimg'><img data-src='http://images4.c-ctrip.com/target/hotel/23000/22573/9afb0b0259ae473082737198ff664a27_130_130.jpg' width='96' height='96' ></div></li>"; ;

        this.$('.imgs-area').append(imgsArr);

        this.sss = new cLazyload({
          imgs: this.$('.imgs-area img'),
          container: this.$('.imgs-area')
        });
      }
    },


    onPreShow: function () {


      this.turning();
    },

    onShow: function () {

    },

    onHide: function () {
      if (this.sss) this.sss.destroy();
    }

  });
});
