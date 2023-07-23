<script setup>
import Swal from "sweetalert2";
import axios from "axios";
const props = defineProps({
  id: Number,
  content: String,
  nickname: String,
});

function deleteComment() {
  Swal.fire({
    icon: "info",
    title: "삭제하시겠습니까?",
    text: "4자리 비밀번호를 입력해주세요",
    input: "password",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    cancelButtonText: "닫기",
    confirmButtonText: "확인",
    showLoaderOnConfirm: true,
    preConfirm: async (pwd) => {
      return deleteCommentAPI(pwd);
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(`.id${props.id}`).classList.add("hidden");
      Swal.fire({
        icon: "success",
        title: `삭제가 완료되었습니다`,
      });
    }
  });
}

async function deleteCommentAPI(pwd) {
  try {
    const response = await axios.delete(
      `http://192.168.219.105:8009/comments/${props.id}/${pwd}`
    );
    return response;
  } catch (error) {
    Swal.showValidationMessage(`${error.response.data.detail}`);
  }
}
</script>
<template>
  <div :class="`text-white p-2 ${'id' + id}`">
    <div class="float-right text-xs mb-2 cursor-pointer" @click="deleteComment">
      <svg
        width="18px"
        height="18px"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke="#ffffff"
          stroke-width="1.5"
        />
        <path
          d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="clear-both"></div>
    <div class="text-sm px-2">{{ content }}</div>
    <div class="float-right text-xs px-6">{{ "From. " + nickname }}</div>
    <div class="clear-both"></div>
    <div class="border-b border-dashed mt-4 border-white/[0.3]"></div>
  </div>
</template>
