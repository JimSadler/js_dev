<template>
  <div>
    <div style="height: 100vh" class="todoPage text-center">
      <div class="flash-container">
        <div class="flash flash--connection" data-type="warning">
          <svg class="flash__icon" viewBox="0 0 20 20">
            <path
              class="flash__exclaim-border"
              d="M3.053 17.193A10 10 0 1 1 16.947 2.807 10 10 0 0 1 3.053 17.193zm12.604-1.536A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314z"
              fill-rule="nonzero"
            />
            <path
              class="flash__exclaim-mark"
              d="M9 5h2v6H9V5zm0 8h2v2H9v-2z"
              fill-rule="nonzero"
            />
          </svg>
          <span class="flash__message">
            It seems like you're offline. Please go online to use the Todolist.
          </span>
          <button class="flash__close">
            <svg viewBox="0 0 20 20">
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              />
            </svg>
          </button>
        </div>
      </div>
      <form action="#" class="todolist" autocomplete="off">
        <div class="todolist__new-task">
          <div class="new-task__input-group">
            <label for="new-task">Add a task</label>
            <input
              type="text"
              id="new-task"
              name="new-task"
              placeholder="E.g. Buy groceries"
            />
          </div>
          <button type="submit">
            <svg viewBox="0 0 10 10">
              <path d="M6 4h4v2H6v4H4V6H0V4h4V0h2z" fill-rule="nonzero" />
            </svg>
            <span>Add task</span>
          </button>
        </div>
        <ul id="task_list" class="todolist__tasks"></ul>
        <div class="todolist__empty-state">
          Fetching your tasks... Please wait a bit... ⏰.
        </div>
      </form>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/Navigation/TheFooter.vue";
export default {
  components: { TheFooter },
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Meta description" },
      ],
      title: "JS Development | ToDo List",
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,600,700",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "projects/styles/todo.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/dompurify/1.0.7/purify.min.js",
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/zl-fetch@latest/dist/index.min.js",
          defer: true,
        },
        {
          src: "projects/todo.js",
          defer: true,
        },
      ],
    };
  },
  layout: "projectLayout",
};
</script>
<style scoped>
.todoPage {
  /* margin: -60px 0 60px; */
  min-height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("~~assets/img/jGlq2Q.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* height: 100%; */
  background-position: 53% top;
  margin-top: -7%;
}
</style>
