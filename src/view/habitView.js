// عرض العادات في جدول احترافي مع الأيقونات والتعامل مع الأحداث
// لا حاجة لكلاس، سنستخدم كائن بسيط وواجهة واضحة

const habitIcons = {
    'رياضة': '<i class="fa-solid fa-person-running text-green-600"></i>',
    'قراءة': '<i class="fa-solid fa-book-open text-blue-600"></i>',
    'شرب الماء': '<i class="fa-solid fa-glass-water-droplet text-cyan-500"></i>',
    'نوم مبكر': '<i class="fa-solid fa-bed text-purple-600"></i>',
    'تأمل': '<i class="fa-solid fa-spa text-pink-500"></i>',
    'أخرى': '<i class="fa-solid fa-star text-yellow-500"></i>',
};

const HabitView = {
    renderHabits(habits) {
        const list = document.getElementById('habit-list');
        if (!habits.length) {
            list.innerHTML = '<div class="text-center text-gray-400">لا توجد عادات بعد</div>';
            return;
        }
        let html = `<table class="w-full text-center border rounded-lg overflow-hidden">
            <thead class="bg-gray-100">
                <tr>
                    <th class="py-2">#</th>
                    <th class="py-2">النوع</th>
                    <th class="py-2">العادة</th>
                    <th class="py-2">التكرار</th>
                    <th class="py-2">عدد الأيام</th>
                    <th class="py-2">تتبع</th>
                    <th class="py-2">حذف</th>
                </tr>
            </thead>
            <tbody>`;
        habits.forEach((habit, i) => {
            html += `<tr class="border-b">
                <td class="py-2">${i + 1}</td>
                <td class="py-2 text-xl">${habitIcons[habit.type] || habitIcons['أخرى']}</td>
                <td class="py-2">${habit.name}</td>
                <td class="py-2">${habit.frequency}</td>
                <td class="py-2">${habit.days || 0}</td>
                <td class="py-2">
                    <button class="track-btn bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1" data-id="${habit.id}" title="زيادة يوم"><i class="fa-solid fa-plus"></i></button>
                </td>
                <td class="py-2">
                    <button class="delete-btn bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1" data-id="${habit.id}" title="حذف"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`;
        });
        html += '</tbody></table>';
        list.innerHTML = html;
    },

    bindTrackHabit(handler) {
        document.getElementById('habit-list').addEventListener('click', function(e) {
            if (e.target.closest('.track-btn')) {
                const id = Number(e.target.closest('.track-btn').dataset.id);
                handler(id);
            }
        });
    },

    bindDeleteHabit(handler) {
        document.getElementById('habit-list').addEventListener('click', function(e) {
            if (e.target.closest('.delete-btn')) {
                const id = Number(e.target.closest('.delete-btn').dataset.id);
                handler(id);
            }
        });
    }
};

window.HabitView = HabitView;