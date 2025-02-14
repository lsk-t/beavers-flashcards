'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        theme: 'Javascript',
        question:`Какое кол-во сообщений будет выведенно в консоль?
         for(let i = 10; i < 35; i += 5) {console.log(i)}`,
        answer1:'15',
        answer2:'25',
        answer3:'35',
        correctAnswer:'35'
      },
      {
        theme: 'Javascript',
        question:'Какие значения можно хранить в переменных?',
        answer1:'Строки, числа с точкой, простые числа и булевые выражения',
        answer2:'Строки, числа с точкой и простые числа',
        answer3:'Только числа и строки',
        correctAnswer:'Строки, числа с точкой, простые числа и булевые выражения'
      },
      {
        theme: 'Javascript',
        question:'Какой метод используется для добавления элемента в конец массива в JavaScript?',
        answer1:'push()',
        answer2:'pop()',
        answer3:'shift()',
        correctAnswer:'push()'
      },
      {
        theme: 'Javascript',
        question:'Какой из следующих типов данных является примитивным в JavaScript?',
        answer1:'Объект',
        answer2:'Массив',
        answer3:'Строка',
        correctAnswer:'Строка'
      },
      {
        theme: 'Javascript',
        question:'Какой оператор используется для сравнения значений и типов в JavaScript?',
        answer1:'==',
        answer2:'===',
        answer3:'!=',
        correctAnswer:'==='
      },
      {
        theme: 'Институт',
        question:'Зачем студенты ходят на лекции?',
        answer1:'Людей посмотреть и себя показать',
        answer2:'Понять что говрит этот человек у доски',
        answer3:'Наконец-то выспаться',
        correctAnswer:'Понять что говрит этот человек у доски'
      },
      {
        theme: 'Институт',
        question:'Нужно ли посещать пары по физкультуре?',
        answer1:'Да, ведь их тааак леееень отрабатывать',
        answer2:'Да, чтобы покрасоваться своим невероятным 1 кубиком пресса',
        answer3:'Нет, потому что я не люблю носиться как сайгак',
        correctAnswer:'Да, ведь их тааак леееень отрабатывать'
      },
      {
        theme: 'Институт',
        question:'Обязательно ли покупать ноутбук для института?',
        answer1:'Да, чтобы играть на лекциях в Dota 2 на паджике',
        answer2:'Да, если тебе удобнее конспектировать лекции в эл. виде',
        answer3:'только если в кредит',
        correctAnswer:'Да, если тебе удобнее конспектировать лекции в эл. видет'
      },
      {
        theme: 'Институт',
        question:'Как нужно общаться с преподавателем в институте?',
        answer1:'С уважением',
        answer2:'Кто такой этот ваш предохранитель?',
        answer3:'Уважительно, но если речь идет о последней пицце в столовой, то тут уж каждый сам за себя',
        correctAnswer:'С уважением'
      },
      {
        theme: 'Институт',
        question:'Как нужно готовиться к сессии?',
        answer1:'Кричать в окно халява прийди и надеяться на удачу',
        answer2:'Тчательнейшим образом изучить весь материал за семестр',
        answer3:'Так все таки кто такой этот ваш предохранитель?',
        correctAnswer:'Тчательнейшим образом изучить весь материал за семестр'
      },
      {
        theme: 'Червячки',
        question:'Самый длинный червь в мире',
        answer1:'Лавровый червь',
        answer2:'Червь-ползун',
        answer3:'Морской червь',
        correctAnswer:'Лавровый червь'
      },
      {
        theme: 'Червячки',
        question:'Какой червь является важной частью экосистемы?',
        answer1:'Дождевой червь',
        answer2:'Червь-ползун',
        answer3:'Мучной червь',
        correctAnswer:'Дождевой червь'
      },
      {
        theme: 'Червячки',
        question:'Какой червь используется в медицине?',
        answer1:'Пиявка медицинская',
        answer2:'Лавровый червь',
        answer3:'Гигантский морской червь',
        correctAnswer:'Пиявка медицинская'
      },
      {
        theme: 'Червячки',
        question:'Какую фразу говорит червячок когда промахивается с базуки?',
        answer1:'Какого?',
        answer2:'Промазал!',
        answer3:'ой-ой-ой',
        correctAnswer:'Промазал!'
      },
      {
        theme: 'Червячки',
        question:'Какие червячки лучшие на вкус',
        answer1:'Бамбуковые',
        answer2:'Мучные черви',
        answer3:'Желейные',
        correctAnswer:'Желейные'
      },
      
      
    
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions')
  }
};
