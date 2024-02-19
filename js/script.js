



const { createApp } = Vue;

createApp({
    data() {
        return {

            activeIndex: 0,

            slides: [
                {
                    image: 'mononoke.jpg',
                    title: "Princess Mononoke",
                    text: "A young prince, seeking the fulfillment of a prophecy, encounters a girl raised by wolves and the two embark on an epic journey to save the forest from destruction."
                },

                {
                    image: 'totoro.jpg',
                    title: 'Totoro',
                    text: "Two young sisters move to the countryside with their father and discover the magical creatures living in the nearby forest, including the gentle and mysterious Totoro."
                },

                {
                    image: 'la-citta-incantata.jpg',
                    title: 'Spirited Away',
                    text: "A young girl finds herself trapped in a mysterious world of spirits and must navigate through an enchanted bathhouse to rescue her parents and return to the human world."
                },

                {
                    image: 'il-castello-nel-cielo.jpg',
                    title: 'Castle in the Sky',
                    text: "A young boy and a girl with a mysterious crystal pendant embark on a high-flying adventure to find the legendary floating city of Laputa and uncover its secrets."
                },

                {
                    image: 'Howl.jpg',
                    title: "Howl's Moving Castle",
                    text: "A young woman is transformed into an elderly woman by a curse and seeks refuge in the moving castle of the enigmatic wizard Howl, where she discovers love and the power of friendship."
                }
            ],

        }
    },

    methods: {
        slideNextImage() {
            this.activeIndex++

            if (this.activeIndex >= this.slides.length) {
                this.activeIndex = 0;
            }
        },

        slidePreviousImage() {
            this.activeIndex--

            if (this.activeIndex < 0) {
                this.activeIndex = this.slides.length - 1;
            }
        },

        slideThumbs(index) {
            this.activeIndex = index;
        },

        autoplaySlide() {
            this.timer = setInterval(function () {
                this.slideNextImage();

            }, 3000);
        }
    }
}).mount("#app");