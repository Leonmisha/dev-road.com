import AndroidBranch from './Stack/AndroidBranch/AndroidBranch';
import IOSBranch from './Stack/IOSBranch/IOSBranch';


const Mobile = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/mobile',
    id: 'Mobile'
  },
  data:{
    proftitle:"Мобильная разработка",
    profdesc:"Отличается высокой универсальностю и стандартизированностью, отличный порог входа"
  },
  children: [
  ]
}
Mobile.data.expanded = {
	desc: `<p>На сегодняшний день смартфоны - самые распространенные устройства, с которыми мы взаимодействуем в повседневной жизни. Соверменный человек не может представить себе жизнь без смарфтона, а их функционал позволяет им заменить пк для большинства задач. Но что делает смартфоны настолько популярными? Это совокупность развития сетевых технологий и технического оснащения устройств. Но сами по себе они бы не сделали смартфоны настолько обожаемыми. Вишенкой на торте стало стремительное развитие програмного обеспечения смарфтонов, именно это позволило производителям раскрыть полный потенциал своих устройств. Мы ежедневно пользуемся десятками мобильных программ, играем в игры и общаемся в другими людьми. Можно представить, насколько популярно и востребованно данное направление в сфере IT. <strong>Мобильная разработка - это сфера, в которой вы будете создавать приложения для различных смартфонов</strong></p>
  <p>На сегодня, существует два основных направления в мобильной разработке - разработка под IOS и разработка под Android. Какую из них выбрать - решать вам, информацию для сравнительного анализа вы можете найти ниже</p>`,
	imgPath: '', // IDEA: Можно будет добавить изображение с разными стеками технологий (объединить через граф. редактор)
               // FEED: Отличная идея!
	tools: [AndoridBranch, IOSBranch],
	prosAndCons: {
		pros: ["Высокооплачиваемотсь", "Востребованность", "Популярность","Невысокий порог вхождения", "Сложность разработки"],
		cons: ["Высокая конкуренция", "Ощутимые отличия разработки между IOS и Android"]
	},
	profsAlike: {
		ids: ['backEnd'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: 'Отличная сфера для начала профессиональной деятельности, в сети присутствет множество обучающих материалов и курсов, а при достижения хорошего уровня навыков найти работу не составит труда.',
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
export default Mobile
