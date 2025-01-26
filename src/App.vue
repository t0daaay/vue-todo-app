<script setup lang="ts">
import { ref } from "vue";

type Task = {
  id: number;
  text: string;
  createdAt: string;
};

const tasks = ref<Task[]>([]);
const newTask = ref("");
let idCounter = 0;

const addTask = () => {
  const text = newTask.value.trim();
  if (!text) return;
  tasks.value.push({
    id: idCounter++,
    text,
    createdAt: new Date().toLocaleString(),
  });
  newTask.value = "";
};
</script>

<template>
  <div class="todo-app">
    <div class="task-form">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="タスク名" />
      <button @click="addTask" data-test="add-button">追加</button>
    </div>

    <ul class="task-list">
      <li
        v-for="task in tasks"
        :data-test="`task-list-item task-list-item-${task.id}`"
      >
        <span :data-test="`task-text-${task.id}`">{{ task.text }}</span>
        <span :data-test="`task-created-at-${task.id}`">{{
          task.createdAt
        }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.task-form input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.task-form button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}
</style>
