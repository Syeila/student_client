import { createRouter, createWebHistory} from 'vue-router'

const routes = [
 	{
 		path:'/',
 		name: 'student.index',
 		component: () => import("../views/student/index.vue")
 	},
 	{
 		path:'/create',
 		name: 'student.create',
 		component: () => import("../views/student/create.vue")
 	},
 	{
 		path:'/edit/:id',
 		name: 'student.update',
 		component: () => import("../views/student/edit.vue")
 	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;

