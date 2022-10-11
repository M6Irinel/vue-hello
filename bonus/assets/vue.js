// @ts-nocheck
const app = new Vue( {
    el: '#vue',
    data () {
        return {
            title: `Carousel`,
            img_src: `https://picsum.photos/id/1/600/400`,
            img_alt: 'Image from Lorem Picsum',
            img_id: 1,
            range_id_min: 30,
            range_id_max: 40,
            time_autoPlay: 3000,
            interv: setInterval( this.img_next, this.time_autoPlay )
        }
    },
    methods: {
        start () {
            this.img_id = this.range_id_min;
        },

        autoPlay () {
            clearInterval( this.interv );
            this.interv = setInterval( this.img_next, this.time_autoPlay );
        },

        img_next () {
            this.autoPlay();

            if ( this.img_id > this.range_id_max )
                this.img_id = this.range_id_min;
            
            this.img_src = `https://picsum.photos/id/${this.img_id++}/600/400`;
        },
        
        img_prev () {
            this.autoPlay();

            if ( this.img_id < 1 )
                this.img_id = this.range_id_max;

            this.img_src = `https://picsum.photos/id/${this.img_id--}/600/400`;
        }
    },
    create() {
        this.autoPlay();
    }
} );