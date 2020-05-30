import FullStackBranch from './FullStackBranch';

const FullStack = {
    meta: {
    hasChildren: false,
    path: '/web-prog/fullstack',
    id: 'fullStack',
  },
  data:{
    profdesc: `"Человек-оркестр", знающий как fron-end, так и back-end. Умеет самостоятельно создавать веб-ресурсы с нуля.`,
    proftitle: 'Fullstack',

  },
  children: [],
  conclusion: ''
}
FullStack.data.expanded = {
	desc: `<p>Fullstack это область, которая сочетает в себе front-end и back-end разработку. Фуллстек специалист может в одиночку создать сайт или веб приложение в одиночку, что является несомненным преимуществом для небольших компаний либо работодателя на freelance. Такой специалист отлично понимает общую архитектуру сайта, и как клиентская и сервеная часть взаимодействует друг с другом. Поэтому высокий порог вхождения и худшая компетенция для отдельных областей в сравнении с узкопрофильными специалистами вполне справедливая плата за все преимущества.</p>`,
	imgPath: '', // IDEA: Можно будет добавить изображение с разными стеками технологий (объединить через граф. редактор)
               // FEED: Отличная идея
	tools: [FullStackBranch],
	prosAndCons: {
		pros: ["Универсальность", "Больше заказов на freelance"],
		cons: ["Высокий порог вхождения", "В крупных компаниях более популярны узкопрофильные специалисты"]
	},
	profsAlike: {
		ids: ['firmware, frontEnd, backEnd'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '<p>fullstack специалисты довольно востребованы на рынке труда, имеют хороший доход, умеют создавать сайты самостоятельно. Но сейчас веб все сильнее разделяется по направлениям из-за нарастающей сложности оных, поэтому быть первоклассным специалистом в обеих областях становится очень сложно. Поэтому fullstack разработчики зачастую невыгодно смотряться в ситуациях, когда нужны специфические узкопрофильные знания.</p>',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '~700$ для начинающего, ~2000$ и больше для middle разработчика'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Профессия не слишком популярна.'
	}, {
		name: 'Перспективы desktop',
		target: 'В последнее время данная область угасает, все больше и больше переходит в Web: веб-приложения, облачные сервисы и другое.'
	}]
}
export default FullStack
