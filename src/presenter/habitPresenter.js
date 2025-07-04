class HabitPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddHabit(this.handleAddHabit.bind(this));
  }

  init() {
    const habits = this.model.getHabits();
    this.view.renderHabits(habits);
  }

  handleAddHabit(habit) {
    this.model.addHabit(habit);
    this.view.renderHabits(this.model.getHabits());
  }
}

// يربط بين الـ Model و View ويتعامل مع الأحداث
(function () {
  const model = new window.HabitModel();
  const view = window.HabitView;

  function render() {
    view.renderHabits(model.getHabits());
  }

  // إضافة عادة جديدة
  document
    .getElementById("add-habit-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("habit-name").value.trim();
      const type = document.getElementById("habit-type").value;
      const frequency = document.getElementById("habit-frequency").value;
      if (!name) return;
      model.addHabit({
        id: Date.now(),
        name,
        type,
        frequency,
        days: 0,
      });
      this.reset();
      render();
    });

  // تتبع الأيام
  document.getElementById("habit-list").addEventListener("click", function (e) {
    if (e.target.closest(".track-btn")) {
      const id = Number(e.target.closest(".track-btn").dataset.id);
      model.incrementDays(id);
      render();
    }
  });

  // عرض العادات عند التحميل
  render();
})();
