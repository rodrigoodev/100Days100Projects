const mixins = {
  data: () => ({}),
  filters: {
    reais: function (value) {
      if (!value) return;

      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};

export default mixins;
