import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  titleChinese?: string;
  summary: string;
  summaryChinese?: string;
  fullContent?: string;
  category: string;
  tags: string[];
  time: string;
  isBreaking?: boolean;
}

interface ArticleDetailProps {
  article: Article;
  language: string;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, language, onBack }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            {language === 'en' ? 'Back to News' : '返回新闻'}
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category === 'tech' ? (language === 'en' ? 'Technology' : '科技') :
                       article.category === 'social' ? (language === 'en' ? 'Society' : '社会') :
                       article.category === 'crime' ? (language === 'en' ? 'Crime' : '犯罪') :
                       (language === 'en' ? 'Home' : '主页')}
                    </Badge>
                    {article.isBreaking && (
                      <Badge variant="destructive" className="text-xs">
                        {language === 'en' ? 'BREAKING' : '突发'}
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground">{article.time}</span>
                  </div>
                  
                  <CardTitle className="news-title text-3xl leading-tight mb-3">
                    {language === 'en' ? article.title : (article.titleChinese || article.title)}
                  </CardTitle>
                  
                  {language !== 'en' && article.titleChinese && (
                    <p className="text-lg text-muted-foreground font-medium mb-3">
                      {article.title}
                    </p>
                  )}
                  
                  <CardDescription className="news-subtitle text-lg leading-relaxed">
                    {language === 'en' ? article.summary : (article.summaryChinese || article.summary)}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <Separator />
            
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <div className="text-base leading-relaxed news-subtitle whitespace-pre-line">
                  {article.fullContent || article.summary}
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Share2" size={16} className="mr-2" />
                    {language === 'en' ? 'Share' : '分享'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Bookmark" size={16} className="mr-2" />
                    {language === 'en' ? 'Save' : '保存'}
                  </Button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Published' : '发布时间'}: {article.time}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold news-title mb-4">
              {language === 'en' ? 'Related News' : '相关新闻'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">
                    {language === 'en' ? 'Technology' : '科技'}
                  </Badge>
                  <CardTitle className="text-lg news-title">
                    {language === 'en' ? 'AI Research Breakthrough' : '人工智能研究突破'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'en' ? 'Scientists achieve major milestone...' : '科学家取得重大里程碑...'}
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit">
                    {language === 'en' ? 'Society' : '社会'}
                  </Badge>
                  <CardTitle className="text-lg news-title">
                    {language === 'en' ? 'Community Development Program' : '社区发展项目'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'en' ? 'New initiative supports local communities...' : '新举措支持当地社区...'}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;