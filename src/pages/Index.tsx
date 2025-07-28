import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const newsCategories = [
    { name: 'Главная', id: 'main', active: true },
    { name: 'IT и технологии', id: 'tech', active: false },
    { name: 'Социальные новости', id: 'social', active: false },
    { name: 'События', id: 'events', active: false }
  ];

  const breakingNews = [
    {
      id: 1,
      title: 'Сингапур запускает новую программу цифровизации госуслуг',
      summary: 'Правительство объявило о масштабной инициативе по переводу всех государственных услуг в цифровой формат к 2025 году.',
      category: 'tech',
      tags: ['правительство', 'цифровизация', 'госуслуги'],
      time: '2 часа назад',
      isBreaking: true
    },
    {
      id: 2,
      title: 'В Marina Bay открылся новый технологический центр',
      summary: 'Крупнейший в Юго-Восточной Азии инновационный хаб начал работу и уже привлек более 50 стартапов.',
      category: 'tech',
      tags: ['Marina Bay', 'стартапы', 'инновации'],
      time: '4 часа назад',
      isBreaking: false
    },
    {
      id: 3,
      title: 'Новая транспортная система свяжет все районы города',
      summary: 'Проект автономных автобусов получил одобрение и начнет тестирование в следующем месяце.',
      category: 'social',
      tags: ['транспорт', 'автономные системы', 'городское планирование'],
      time: '6 часов назад',
      isBreaking: false
    }
  ];

  const techNews = [
    {
      id: 4,
      title: 'Сингапур становится лидером в области ИИ-исследований',
      summary: 'Местные университеты получили рекордное финансирование на исследования искусственного интеллекта.',
      category: 'tech',
      tags: ['ИИ', 'исследования', 'университеты'],
      time: '8 часов назад'
    },
    {
      id: 5,
      title: 'Финтех-сектор показал рост на 40% за год',
      summary: 'Банковские технологии и цифровые платежи демонстрируют устойчивый рост в регионе.',
      category: 'tech',
      tags: ['финтех', 'банкинг', 'платежи'],
      time: '12 часов назад'
    }
  ];

  const socialNews = [
    {
      id: 6,
      title: 'Экологическая инициатива: Сингапур к 2030 году станет углеродно-нейтральным',
      summary: 'Амбициозный план включает массовое озеленение и переход на возобновляемые источники энергии.',
      category: 'social',
      tags: ['экология', 'углеродная нейтральность', 'зеленая энергия'],
      time: '14 часов назад'
    },
    {
      id: 7,
      title: 'Программа поддержки малого бизнеса расширяется',
      summary: 'Правительство выделило дополнительные средства на поддержку предпринимателей после пандемии.',
      category: 'social',
      tags: ['малый бизнес', 'поддержка', 'экономика'],
      time: '16 часов назад'
    }
  ];

  const filteredNews = [...breakingNews, ...techNews, ...socialNews].filter(news => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold news-title text-primary">
                SINGAPORE NEWS
              </h1>
              <Badge variant="secondary" className="text-xs">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-80">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск новостей и тегов..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-6">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                className={`pb-2 px-1 border-b-2 transition-colors news-subtitle ${
                  category.active 
                    ? 'border-primary text-primary font-semibold' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breaking News */}
        {breakingNews.some(news => news.isBreaking) && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                <Icon name="AlertTriangle" size={16} />
                <span className="font-semibold text-sm">СРОЧНЫЕ НОВОСТИ</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {breakingNews.filter(news => news.isBreaking).map((news) => (
                <Card key={news.id} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="news-title text-xl leading-tight">
                        {news.title}
                      </CardTitle>
                      <Badge variant="destructive" className="text-xs whitespace-nowrap">
                        BREAKING
                      </Badge>
                    </div>
                    <CardDescription className="news-subtitle text-base mt-2">
                      {news.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {news.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{news.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Main News Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold news-title">Последние новости</h2>
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchQuery ? filteredNews : [...breakingNews, ...techNews, ...socialNews]).slice(0, 6).map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {news.category === 'tech' ? 'IT' : news.category === 'social' ? 'Общество' : 'Главная'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-lg leading-snug">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="news-subtitle">
                    {news.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {news.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* IT & Tech Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Monitor" size={24} className="text-primary" />
            <h2 className="text-2xl font-bold news-title">IT и технологии</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      IT
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-xl">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="news-subtitle text-base">
                    {news.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {news.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Social News Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Users" size={24} className="text-primary" />
            <h2 className="text-2xl font-bold news-title">Социальные новости</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Общество
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-xl">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="news-subtitle text-base">
                    {news.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {news.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold news-title text-lg mb-4">Singapore News</h3>
              <p className="text-sm text-muted-foreground news-subtitle">
                Достоверные новости Сингапура в режиме реального времени
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">IT и технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Социальные новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">События</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: news@singapore.sg</li>
                <li>Тел: +65 1234 5678</li>
                <li>Адрес: Marina Bay, Singapore</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Получайте последние новости на email
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="text-sm" />
                <Button size="sm">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Singapore News. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;