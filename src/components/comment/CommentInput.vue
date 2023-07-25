<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import { computed, ref } from "vue";

const emit = defineEmits(["new-comment"]);

const schema = Yup.object().shape({
  nickname: Yup.string().required("이름을 입력해주세요"),
  password: Yup.string()
    .length(4, "4자리 비밀번호를 입력해주세요")
    .required("비밀번호를 입력해주세요"),
  content: Yup.string().required("내용을 입력해주세요"),
});

function onSubmit(values) {
  document.querySelector('.comment-input input[name="password"]').value =
    passwordBackUp.value;
  values["sessionid"] = "d1-1";
  Swal.fire({
    icon: "info",
    title: "연사님을 응원해주세요!",
    text: "욕설이나 비방은 삭제 될 수 있습니다.",
    showCancelButton: true,
    cancelButtonText: "닫기",
    confirmButtonText: "네",
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      return postComment(values);
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: `등록이 완료되었습니다`,
      });
      values["id"] = result.value.data.id;
      emit("new-comment", values);
      document.querySelector("Form").reset();
      passwordBackUp.value = "";
    }
  });
}

async function postComment(body) {
  try {
    const response = await axios.post(
      "http://192.168.219.105:8009/comments/",
      body
    );
    return response;
  } catch (error) {
    Swal.showValidationMessage(`다시 한 번 시도해주세요`);
  }
}
const passwordBackUp = ref("");
function removeMaskedPassword(event) {
  event.target.value = passwordBackUp.value;
}
function setMaskedPassword(event) {
  passwordBackUp.value = event.target.value;
  event.target.value = "*".repeat(passwordBackUp.value.length);
}
</script>
<template>
  <div>
    <Form
      class="comment-input p-3 rounded-2xl border border-white/[0.5]"
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors }"
      autocomplete="off"
    >
      <div class="flex justify-between">
        <div>
          <label class="custom-input-label">닉네임</label>
          <Field
            name="nickname"
            type="text"
            class="custom-input p-1 text-sm"
            :class="{ 'is-invalid': errors.nickname }"
            placeholder="재미있는 닉네임"
          />
          <div class="invalid-feedback">{{ errors.nickname }}</div>
        </div>
        <div>
          <label class="custom-input-label">비밀번호</label>
          <Field
            name="password"
            type="text"
            class="custom-input p-1 text-sm"
            placeholder="4자리 비밀번호"
            @focusin="removeMaskedPassword"
            @focusout="setMaskedPassword"
          />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
      </div>
      <div class="mt-2">
        <label class="custom-input-label">내용</label>
        <Field
          name="content"
          as="textarea"
          class="custom-input w-full p-3 text-sm h-20"
          :class="{ 'is-invalid': errors.content }"
          placeholder="궁금한점, 후기를 남겨주세요"
        />
        <div class="invalid-feedback">{{ errors.content }}</div>
      </div>
      <button
        type="submit"
        class="float-right py-1 px-2 rounded-xl text-sm bg-white font-bold"
      >
        등록
      </button>
      <div class="clear-both"></div>
    </Form>
  </div>
</template>
<style>
[contenteditable="true"]:empty:before {
  content: test;
}
</style>
