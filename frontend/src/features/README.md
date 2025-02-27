# Features
Фичи (Features) — это конкретные пользовательские возможности или действия в приложении. Здесь реализуются модули, которые решают одну пользовательскую задачу.

Содержимое Features:

Логика взаимодействия пользователя с системой (например, авторизация, добавление товара в корзину).
Компоненты и UI-элементы, специфичные для задачи.
Локальная бизнес-логика (взаимодействие с сущностями).
Сторонние библиотеки или хелперы, связанные с этой задачей.

## В каждой фиче (feature) представлены данные срезы:

### 1. `ui` - Здесь мы отображаем нашу фичу. Фича может быть формой, кнопкой, которая выполняет действие, либо отвечает за условное отображение элемента.
### 2. `model` - Если фича сложная, то её код можно вынести в model и создать под неё стор.
пр. (feature "in-stock")
```
<span style={{ color: inStock ? 'green' : 'red' }}>
   {inStock ? 'В наличии' : 'Нет в наличии'}
</span>
```
  
пр. (feature "add-to-cart")
```
<template> 
  <button @click={() => addToCart(productId)}>
      Добавить в корзину
  </button>
</template>

<script setup>
const addToCart = (id) => {
  // Логика добавления товара в корзину
  console.log(`Product ${id} added to cart`);
};
</script>
```
