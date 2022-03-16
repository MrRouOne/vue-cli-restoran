<template>
  <div class="container">
    <header
      class="
        d-flex
        flex-row
        justify-content-between
        align-items-center
        border-bottom
      "
    >
      <article>
        <a href="/" class="text-decoration-none"><h1>Toitotoro</h1></a>
      </article>
      <nav>
        <!-- <a href="#">Сотрудники</a>
        <a href="#">Смены</a>
        <a href="#">Заказы</a> -->
        <a
          href="#"
          class="btn btn-primary btn-lg"
          @click.prevent="openOrderList"
          >Список заказов</a
        >
        <a href="#" class="btn btn-primary btn-lg" @click.prevent="openModal"
          >Вход</a
        >
        <!-- <a href="#" class="cancel_button">Выход</a> -->
      </nav>
    </header>
    <main>
      <Modal v-if="modalOpen"></Modal>
      <OrderList v-if="orderListOpen" />
      <!-- <section class="employees">
        <article class="card">
          <div>
            <span>Имя: </span><span>Ariane</span> <span>Статус: </span
            ><span class="working">Работает</span> <span>Должность: </span
            ><span>Администратор</span>
            <button>Подробнее</button>
          </div>
          <div>
            <span>Имя: </span><span>Тестер</span> <span>Статус: </span
            ><span class="fired">Уволен</span> <span>Должность: </span
            ><span>Тестировщик</span>
            <button>Подробнее</button>
          </div>
          <div>
            <span>Имя: </span><span>Ariane</span> <span>Статус: </span
            ><span class="working">Работает</span> <span>Должность: </span
            ><span>Администратор</span>
            <button>Подробнее</button>
          </div>
          <div>
            <span>Имя: </span><span>Ariane</span> <span>Статус: </span
            ><span class="working">Работает</span> <span>Должность: </span
            ><span>Оффициант</span>
            <button>Подробнее</button>
          </div>
          <div>
            <span>Имя: </span><span>Ariane</span> <span>Статус: </span
            ><span class="working">Работает</span> <span>Должность: </span
            ><span>Повар</span>
            <button>Подробнее</button>
          </div>
        </article>
      </section>
      <section class="shift"></section>
      <section class="orders"></section> -->
    </main>
    <!-- <footer>
      <article>&copy; Tortotoro - все права защищены</article>
      <article>8(888)777-44-11</article>
    </footer> -->
  </div>
</template>

<script>
import Modal from "../components/Login";
import OrderList from "../components/Cook";
export default {
  name: "HomeComponent",
  components: {
    Modal,
    OrderList,
  },
  data() {
    return {
      modalOpen: false,
      orderListOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    openOrderList() {
      this.orderListOpen = !this.orderListOpen;
    },
  },
};
</script>
