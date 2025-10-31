import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    {
      id: 'self',
      title: 'Курс "Сам себе визажист"',
      description: 'Научитесь создавать профессиональный макияж для себя',
      duration: '4 недели',
      price: '15 000 ₽',
      certificate: true,
      topics: [
        'Основы цветотипирования',
        'Подготовка кожи к макияжу',
        'Дневной и вечерний макияж',
        'Коррекция лица',
        'Работа с бровями'
      ]
    },
    {
      id: 'master',
      title: 'Курс "Мастер визажист"',
      description: 'Профессиональное обучение для работы в индустрии красоты',
      duration: '8 недель',
      price: '35 000 ₽',
      certificate: true,
      topics: [
        'Анатомия и физиология кожи',
        'Профессиональная косметика',
        'Свадебный и вечерний макияж',
        'Работа с разными типами кожи',
        'Студийная и коммерческая съемка',
        'Креативный и художественный макияж',
        'Построение бизнеса визажиста'
      ]
    }
  ];

  const formats = [
    {
      id: 'online-group',
      icon: 'Users',
      title: 'Онлайн в группе',
      description: 'Занятия по расписанию с группой',
      benefits: ['Доступная цена', 'Общение с коллегами', 'Обратная связь']
    },
    {
      id: 'online-individual',
      icon: 'Video',
      title: 'Онлайн индивидуально',
      description: 'Персональные занятия в удобное время',
      benefits: ['Гибкий график', 'Персональный подход', 'Быстрый прогресс']
    },
    {
      id: 'offline-group',
      icon: 'Home',
      title: 'Очно в группе',
      description: 'Практические занятия в студии',
      benefits: ['Живая практика', 'Профессиональное оборудование', 'Нетворкинг']
    },
    {
      id: 'offline-individual',
      icon: 'UserCheck',
      title: 'Очно индивидуально',
      description: 'Личные занятия с преподавателем',
      benefits: ['Максимум внимания', 'Индивидуальная программа', 'Эффективное обучение']
    }
  ];

  const gallery = [
    { id: 1, alt: 'Работа выпускницы 1' },
    { id: 2, alt: 'Работа выпускницы 2' },
    { id: 3, alt: 'Работа выпускницы 3' },
    { id: 4, alt: 'Работа выпускницы 4' },
    { id: 5, alt: 'Работа выпускницы 5' },
    { id: 6, alt: 'Работа выпускницы 6' }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif">Академия визажа</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#formats" className="hover:text-primary transition-colors">Форматы</a>
            <a href="#about" className="hover:text-primary transition-colors">О преподавателе</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Записаться</Button>
        </div>
      </header>

      <section className="bg-gradient-to-b from-accent/30 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <Badge className="mb-4" variant="secondary">Профессиональное обучение</Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Станьте профессиональным визажистом
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Два направления обучения с выдачей сертификатов. Онлайн и очно, индивидуально или в группе.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <Icon name="GraduationCap" className="mr-2" size={20} />
              Выбрать курс
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Award" className="mr-2" size={20} />
              Получить сертификат
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Программы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите курс, который соответствует вашим целям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card key={course.id} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={course.id === 'master' ? 'default' : 'secondary'}>
                      {course.duration}
                    </Badge>
                    {course.certificate && (
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Icon name="Award" size={16} />
                        <span className="font-medium">Сертификат</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-serif">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="topics">
                        <AccordionTrigger className="text-left">
                          <span className="font-semibold">Программа курса</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-2">
                            {course.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-sm text-muted-foreground">Стоимость</div>
                        <div className="text-2xl font-bold font-serif">{course.price}</div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setSelectedCourse(course.id)}>
                            Записаться
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-2xl">Запись на курс</DialogTitle>
                            <DialogDescription>
                              Заполните форму, и мы свяжемся с вами в ближайшее время
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4">
                            <div>
                              <Label htmlFor="name">Ваше имя</Label>
                              <Input id="name" placeholder="Анна Иванова" />
                            </div>
                            <div>
                              <Label htmlFor="phone">Телефон</Label>
                              <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="anna@example.com" />
                            </div>
                            <div>
                              <Label>Выбранный курс</Label>
                              <Input value={courses.find(c => c.id === selectedCourse)?.title || ''} disabled />
                            </div>
                            <div>
                              <Label htmlFor="message">Комментарий</Label>
                              <Textarea id="message" placeholder="Ваши вопросы или пожелания" rows={3} />
                            </div>
                            <Button type="submit" className="w-full">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Форматы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобный для вас способ обучения
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {formats.map((format, index) => (
              <Card key={format.id} className="animate-fade-in hover:shadow-lg transition-all hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={format.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif">{format.title}</CardTitle>
                  <CardDescription>{format.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {format.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent rounded-2xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Преподаватель" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Badge className="mb-4">Преподаватель</Badge>
                <h2 className="text-4xl font-serif font-bold mb-6">Ваше имя</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Профессиональный визажист с 10-летним опытом работы в индустрии красоты. 
                    Сертифицированный специалист международного уровня.
                  </p>
                  <p>
                    Работала с ведущими брендами косметики, участвовала в модных показах 
                    и фотосессиях для глянцевых журналов.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon name="Award" size={20} className="text-primary" />
                      <span>Более 500 выпускников</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Star" size={20} className="text-primary" />
                      <span>Международные сертификаты</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span>Индивидуальный подход</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Галерея работ</h2>
            <p className="text-lg text-muted-foreground">
              Работы наших выпускников
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={item.id} 
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent rounded-lg overflow-hidden hover:scale-105 transition-transform animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img 
                  src="/placeholder.svg" 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Остались вопросы? Мы с радостью на них ответим
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <a href="tel:+79000000000" className="text-muted-foreground hover:text-primary">
                  +7 (900) 000-00-00
                </a>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@makeup-school.ru" className="text-muted-foreground hover:text-primary">
                  info@makeup-school.ru
                </a>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Адрес студии</h3>
                <p className="text-muted-foreground">
                  Москва, ул. Примерная, д. 10
                </p>
              </div>
            </div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="font-serif">Записаться на консультацию</CardTitle>
                <CardDescription>
                  Заполните форму, и мы расскажем подробнее о курсах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Ваше имя</Label>
                      <Input id="contact-name" placeholder="Анна" />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Телефон</Label>
                      <Input id="contact-phone" type="tel" placeholder="+7 (900) 000-00-00" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="anna@example.com" />
                  </div>
                  <div>
                    <Label>Интересующий курс</Label>
                    <RadioGroup defaultValue="any">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="any" />
                        <Label htmlFor="any" className="font-normal">Еще не определилась</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="self" id="self" />
                        <Label htmlFor="self" className="font-normal">Сам себе визажист</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="master" id="master" />
                        <Label htmlFor="master" className="font-normal">Мастер визажист</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Академия визажа</h3>
              <p className="text-background/70">
                Профессиональное обучение визажу с выдачей сертификатов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#courses" className="hover:text-background">Курсы</a></li>
                <li><a href="#formats" className="hover:text-background">Форматы</a></li>
                <li><a href="#about" className="hover:text-background">О преподавателе</a></li>
                <li><a href="#gallery" className="hover:text-background">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>+7 (900) 000-00-00</li>
                <li>info@makeup-school.ru</li>
                <li>Москва, ул. Примерная, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 Академия визажа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
