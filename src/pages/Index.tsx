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
    { name: 'Home', nameChinese: '主页', id: 'main', active: true },
    { name: 'Technology', nameChinese: '科技', id: 'tech', active: false },
    { name: 'Society', nameChinese: '社会', id: 'social', active: false },
    { name: 'Events', nameChinese: '活动', id: 'events', active: false }
  ];

  const breakingNews = [
    {
      id: 1,
      title: 'Singapore Launches New Digital Government Services Program',
      titleChinese: '新加坡推出新的数字政府服务计划',
      summary: 'The government announced a major initiative to digitize all public services by 2025, revolutionizing citizen interactions with state agencies.',
      category: 'tech',
      tags: ['Government', 'Digitalization', 'Public Services'],
      time: '2 hours ago',
      isBreaking: true
    },
    {
      id: 2,
      title: 'New Technology Hub Opens at Marina Bay',
      titleChinese: '滨海湾新科技中心开业',
      summary: 'Southeast Asia\'s largest innovation hub begins operations, already attracting over 50 startups to its state-of-the-art facilities.',
      category: 'tech',
      tags: ['Marina Bay', 'Startups', 'Innovation'],
      time: '4 hours ago',
      isBreaking: false
    },
    {
      id: 3,
      title: 'New Transport System to Connect All City Districts',
      titleChinese: '新交通系统将连接城市所有区域',
      summary: 'Autonomous bus project receives approval and will begin testing operations next month across multiple districts.',
      category: 'social',
      tags: ['Transport', 'Autonomous Systems', 'Urban Planning'],
      time: '6 hours ago',
      isBreaking: false
    }
  ];

  const techNews = [
    {
      id: 4,
      title: 'Singapore Emerges as AI Research Leader',
      titleChinese: '新加坡成为人工智能研究领导者',
      summary: 'Local universities receive record funding for artificial intelligence research, positioning Singapore at the forefront of AI innovation.',
      category: 'tech',
      tags: ['AI', 'Research', 'Universities'],
      time: '8 hours ago'
    },
    {
      id: 5,
      title: 'Fintech Sector Shows 40% Growth This Year',
      titleChinese: '金融科技行业今年增长40%',
      summary: 'Banking technologies and digital payments demonstrate sustained growth across the region, cementing Singapore\'s fintech leadership.',
      category: 'tech',
      tags: ['Fintech', 'Banking', 'Digital Payments'],
      time: '12 hours ago'
    }
  ];

  const socialNews = [
    {
      id: 6,
      title: 'Green Initiative: Singapore to Become Carbon Neutral by 2030',
      titleChinese: '绿色倡议：新加坡将在2030年实现碳中和',
      summary: 'Ambitious plan includes massive urban greening and transition to renewable energy sources across the island nation.',
      category: 'social',
      tags: ['Environment', 'Carbon Neutral', 'Green Energy'],
      time: '14 hours ago'
    },
    {
      id: 7,
      title: 'Small Business Support Program Expands',
      titleChinese: '小企业支持计划扩大',
      summary: 'Government allocates additional funding to support entrepreneurs in post-pandemic economic recovery efforts.',
      category: 'social',
      tags: ['Small Business', 'Support', 'Economy'],
      time: '16 hours ago'
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
              <div className="text-center">
                <h1 className="text-3xl font-bold news-title text-primary">
                  SINGAPORE NEWS
                </h1>
                <p className="text-sm text-muted-foreground">新加坡新闻</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-80">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search news and tags..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Notifications
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
                <div className="text-center">
                  <div>{category.name}</div>
                  <div className="text-xs opacity-75">{category.nameChinese}</div>
                </div>
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
                <span className="font-semibold text-sm">BREAKING NEWS</span>
                <span className="text-xs opacity-75">突发新闻</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {breakingNews.filter(news => news.isBreaking).map((news) => (
                <Card key={news.id} className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="news-title text-xl leading-tight mb-1">
                          {news.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {news.titleChinese}
                        </p>
                      </div>
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
            <div>
              <h2 className="text-2xl font-bold news-title">Latest News</h2>
              <p className="text-sm text-muted-foreground">最新消息</p>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Refresh
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchQuery ? filteredNews : [...breakingNews, ...techNews, ...socialNews]).slice(0, 6).map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {news.category === 'tech' ? 'Technology' : news.category === 'social' ? 'Society' : 'Home'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-lg leading-snug mb-1">
                    {news.title}
                  </CardTitle>
                  {news.titleChinese && (
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      {news.titleChinese}
                    </p>
                  )}
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
            <div>
              <h2 className="text-2xl font-bold news-title">Technology</h2>
              <p className="text-sm text-muted-foreground">科技新闻</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Technology
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-xl mb-1">
                    {news.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {news.titleChinese}
                  </p>
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
            <div>
              <h2 className="text-2xl font-bold news-title">Society</h2>
              <p className="text-sm text-muted-foreground">社会新闻</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Society
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <CardTitle className="news-title text-xl mb-1">
                    {news.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {news.titleChinese}
                  </p>
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
              <h3 className="font-bold news-title text-lg mb-2">Singapore News</h3>
              <p className="text-sm text-muted-foreground mb-2">新加坡新闻</p>
              <p className="text-sm text-muted-foreground news-subtitle">
                Trusted Singapore news in real-time
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sections</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Society</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: news@singapore.sg</li>
                <li>Tel: +65 6123 4567</li>
                <li>Address: Marina Bay, Singapore</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest news in your inbox
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="text-sm" />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Singapore News. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;