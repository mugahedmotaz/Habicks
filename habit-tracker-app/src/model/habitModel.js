class HabitModel {
    constructor() {
        this.habits = this.loadHabits();
    }

    loadHabits() {
        const data = localStorage.getItem('habits');
        return data ? JSON.parse(data) : [];
    }

    saveHabits() {
        localStorage.setItem('habits', JSON.stringify(this.habits));
    }

    addHabit(habit) {
        this.habits.push(habit);
        this.saveHabits();
    }

    removeHabit(habitId) {
        this.habits = this.habits.filter(habit => habit.id !== habitId);
        this.saveHabits();
    }

    getHabits() {
        return this.habits;
    }

    incrementDays(id) {
        const habit = this.habits.find(h => h.id === id);
        if (habit) {
            habit.days = (habit.days || 0) + 1;
            this.saveHabits();
        }
    }
}

// إزالة export default لاستخدام الكلاس مع window
window.HabitModel = HabitModel;