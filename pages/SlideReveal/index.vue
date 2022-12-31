<template>
  <div >
    <div  class="slideRevealPage">
        <div style="margin-top: 20rem; height: 70%; width: 75%; margin-bottom: 5rem; padding-bottom: 5rem; background-color: rgba(255, 255, 255, 0.26);">
          <div class="header">
            <div class="leading-line"></div>
            <div style="margin-bottom: 10em;">
              <h1>
                <span data-value="5">5</span>
                <span data-value="of-my">of my</span>
                <span data-value="favourite">favourite</span>
                <span data-value="books">books </span>

              </h1>
             <div class="scroll"><i class="fa fa-angle-double-down"></i></div>
            </div>
          </div>
          <div class="book" style="justify-content: center; margin: auto;">
            <img style="width: 100%;"
                 src="projects/images/feynman.jpg"
                 alt="Book image of Surely you're joking, Mr. Feynman image"
            />
            <h2>Surely you're joking, Mr. Feynman</h2>
            <div class="comment">
              <p>
                Hilarious book about how Richard Feynman lived through his life. It
                help me realize I didn't have to be serious all the time!
              </p>
            </div>
          </div>
          <div class="book" style="justify-content: center; margin: auto;">
            <img style="width: 100%;" src="projects/images/weird.jpg" alt="Book image of Own your weird" />
            <h2>Own your weird</h2>
            <div class="comment">
              <p>
                More weird and quirky adventures, this time with Jason Zook. I love
                hearing Jason's stories and I wonder how I can make my own unique
                and weird stories!
              </p>
            </div>
          </div>
          <div class="book" style="justify-content: center; margin: auto;">
            <img style="width: 100%;"
                 src="projects/images/marketing.jpg"
                 alt="Book image of This is marketing."
            />
            <h2>This is Marketing</h2>
            <div class="comment">
              <p>
                I went through the online course instead of the book. It completely
                reshaped my views on Marketing. Highly recommended if you face a
                challenge creating and selling your stuff.
              </p>
            </div>
          </div>
          <div class="book" style="justify-content: center; margin: auto;">
            <img style="width: 100%;"
                 src="projects/images/stillness.jpg"
                 alt="Book image of Stillness is the key."
            />
            <h2>Stillness is the Key</h2>
            <div class="comment">
              <p>
                I read through this book twice now. First read: I learned to search
                for stillness instead of calmness. Big difference!
              </p>
              <p>
                Second read: I found out I do everything without requesting for
                help. That's why I feel drained and tired.
              </p>
            </div>
          </div>
          <div class="book" style="justify-content: center; margin: auto;">
            <img style="width: 100%;"
                 src="projects/images/conversations.jpg"
                 alt="Book image of Difficult conversations.."
            />
            <h2>Difficult Conversations</h2>
            <div class="comment">
              <p>
                Do you have people you find difficult to talk to? My wife
                <em>was</em> one such person. This book gave me the techniques to
                start a proper conversation with her.
              </p>
              <p>Guess what? Everything is got better 😉!</p>
            </div>
          </div>
        </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "~/components/Navigation/TheFooter.vue";
export default {
  components: {
    TheFooter,
  },
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Meta description" },
      ],
      title: "JS Development | Accordion",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,600,700",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "projects/styles/slideReveal.css",
        },
      ],
      script: [
        {
          src: "projects/SlideReveal/main.js",
          defer: true,
          // type: 'module'
        },
      ],
    };
  },
  layout: "projectLayout",
};
</script>
<style scoped>
.slideRevealPage {
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/glowing-outer-space-u9zxwwbna6x9s28y-u9zxwwbna6x9s28y.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
