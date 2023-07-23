<script setup>
import CommentInput from "/src/components/comment/CommentInput.vue";
import Comment from "/src/components/comment/Comment.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const comments = ref([]);
const limit = ref(5);
const pageNum = ref(1);

onMounted(() => {
  getMore();
});

async function getMore() {
  try {
    console.log(
      `http://192.168.219.105:8009/comments/d1-1/${limit.value}/${pageNum.value}`
    );
    const response = await axios.get(
      `http://192.168.219.105:8009/comments/d1-1/${limit.value}/${pageNum.value}`
    );
    if (response.data.length === 0) {
      document.querySelector(".comments .more-button").classList.add("hidden");
    } else {
      pageNum.value++;
      comments.value.push(...response.data);
    }

    return response;
  } catch (error) {
    console.log(error);
  }
}

function addNewComment(value) {
  comments.value.unshift(value);
}
</script>
<template>
  <div
    class="comments bg-black/[0.4] p-5 w-[450px] lg:w-[850px] mx-auto rounded-2xl"
  >
    <div class="text-orange-400 font-bold text-xl mb-5">댓글</div>
    <CommentInput @new-comment="addNewComment"></CommentInput>
    <div class="mt-5"></div>
    <Comment
      :content="comment.content"
      :id="comment.id"
      :nickname="comment.nickname"
      v-for="(comment, i) in comments"
      :key="i"
    ></Comment>
    <div class="flex items-center justify-center">
      <button
        class="more-button bg-white rounded-xl mt-3 py-1 px-3 text-sm font-bold"
        @click="getMore"
      >
        댓글 더보기
      </button>
    </div>
  </div>
</template>
