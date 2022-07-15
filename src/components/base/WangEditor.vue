<!-- eslint-disable no-inline-comments -->
<!-- eslint-disable line-comment-position -->
<!-- eslint-disable line-comment-position -->
<!--
 * @Author: zhen-0
 * @Date: 2022-07-13 23:13:00
 * @Description:wangEditor富文本编辑器
-->
<template>
  <div class="wang-editor">
    <Toolbar
      style="border-bottom: 1px solid #ccc;"
      :editor="editor"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="html"
      style=" overflow-y: hidden;"
      :default-config="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

export default Vue.extend({
  components: { Editor,
    Toolbar, },
  data() {
    return {
      editor: null,
      html: '<p>hello</p>',
      toolbarConfig: {
        toolbarKeys: [
        // 菜单 key
          'headerSelect',

          // 分割线
          '|',

          // 菜单 key
          'bold', 'italic'
        ],
      },
      editorConfig: { placeholder: '请输入内容...', },
      mode: 'default',
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    }, 1500)
  },
  beforeDestroy() {
    const { editor, } = this
    if (editor === null) {
      return
    }
    // 组件销毁时，及时销毁编辑器
    editor.destroy()
  },
  methods: {
    onCreated(editor) {
      // 一定要用 Object.seal() ，否则会报错
      this.editor = Object.seal(editor)
    },
  },
})
</script>

<style scoped>
.wang-editor {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
}
</style>
