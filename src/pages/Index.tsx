import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

  const products = [
    { name: 'ТМГ-25 кВА', power: '25', price: '128 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/5bc63192-7b57-41f6-b54e-6e5862379b5b.jpg' },
    { name: 'ТМГ-40 кВА', power: '40', price: '145 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/be2d956a-3b04-4139-9b47-6ea214782d82.jpg' },
    { name: 'ТМГ-63 кВА', power: '63', price: '170 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/3f0c2559-b132-4020-bd5c-a7872219bc13.jpg' },
    { name: 'ТМГ-100 кВА', power: '100', price: '210 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/f62b1909-b7b2-4bcc-9ce4-0ba04424f82d.jpg' },
    { name: 'ТМГ-160 кВА', power: '160', price: '265 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/65b257b9-4a91-4021-8ae7-ead9cf7afcb9.jpg' },
    { name: 'ТМГ-250 кВА', power: '250', price: '340 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/0d174088-2121-4d54-ad01-c515358db8a0.jpg' },
    { name: 'ТМГ-400 кВА', power: '400', price: '450 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/f6525fd4-aa2f-44a0-82bf-378ccf928696.jpg' },
    { name: 'ТМГ-630 кВА', power: '630', price: '615 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/e81ee21f-6e73-4af0-9466-73b351084e16.jpg' },
    { name: 'ТМГ-1000 кВА', power: '1000', price: '880 000 ₽', image: 'https://cdn.poehali.dev/projects/20f0b944-044a-4871-88d2-cd254bed5c00/files/9527ca0b-185c-4f77-a224-cfec153d07a0.jpg' },
  ];

  const advantages = [
    {
      icon: 'Truck',
      title: 'Прямые поставки',
      description: 'Закупаем напрямую у производителей, что позволяет предложить лучшие цены'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Сертифицированное качество по лучшим ценам. Полное послепродажное обслуживание'
    },
    {
      icon: 'Users',
      title: 'Полный цикл услуг',
      description: 'Поставка оборудования, монтаж, проектирование, наладка. Работаем под ключ'
    },
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Организуем доставку по Санкт-Петербургу и Ленинградской области в день заказа или на следующий'
    },
  ];

  const stats = [
    { value: '12+', label: 'лет опыта в энергетике' },
    { value: '150+', label: 'реализованных проектов' },
    { value: '1500+', label: 'наименований трансформаторов' },
    { value: '100%', label: 'довольных клиентов' },
  ];

  const productCategories = [
    { name: 'ТМГ трансформаторы', description: 'Трехфазные масляные герметичные' },
    { name: 'ОМП трансформаторы', description: 'Однофазные масляные понижающие' },
    { name: 'ТОП трансформаторы', description: 'Трансформаторы общего применения' },
    { name: 'ТМ трансформаторы', description: 'Масляные трехфазные' },
    { name: 'Дополнительное оборудование', description: 'Системы мониторинга и защиты' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-5 px-6 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg">
              <Icon name="Zap" size={24} className="text-slate-900" />
            </div>
            <span className="text-2xl font-bold tracking-tight">МЕРКУРИЙ</span>
          </div>
          <div className="flex flex-col items-end text-sm gap-1">
            <a href="tel:+79624424921" className="hover:text-amber-400 transition-colors font-medium">8 962 442-49-21</a>
            <a href="tel:+79588581999" className="hover:text-amber-400 transition-colors font-medium">8 958 858-19-99</a>
            <span className="text-xs text-slate-400 mt-1">ПН-ПТ, 9:00-18:00</span>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/20">
              Промышленное оборудование
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Трансформаторы для<br />крупного бизнеса
          </h1>
          <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Поставка силового электрооборудования с гарантией 5 лет. Индивидуальные решения для промышленных объектов.
          </p>
          <Button 
            onClick={() => setIsPhoneDialogOpen(true)}
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500 font-semibold px-10 py-7 text-lg shadow-xl shadow-amber-500/20 border border-amber-400/50"
          >
            Консультация эксперта
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Наша экспертиза</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300">
                <div className="flex flex-col items-start gap-5">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300">
                    <Icon name={advantage.icon} size={28} className="text-amber-400 group-hover:text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-slate-900">{advantage.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Каталог продукции</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Более 1500 наименований трансформаторного оборудования от ведущих производителей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-amber-200">
                <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-2xl mb-3 text-slate-900">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    Трехфазный масляный трансформатор мощностью {product.power} кВА
                  </p>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">от</span>
                    <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                  </div>
                  <Button 
                    onClick={() => setIsPhoneDialogOpen(true)}
                    className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-500 hover:to-amber-600 text-white hover:text-slate-900 font-medium py-6 transition-all duration-300"
                  >
                    Запросить предложение
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {productCategories.map((category, index) => (
              <div 
                key={index} 
                onClick={() => setIsPhoneDialogOpen(true)}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:border-amber-400 transition-all duration-300 cursor-pointer"
              >
                <h4 className="font-semibold text-lg text-slate-900 mb-2">{category.name}</h4>
                <p className="text-slate-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Нам доверяют</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-3">{stat.value}</div>
                <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block mb-8">
                <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-full">
                  <Icon name="Award" size={24} className="text-slate-900" />
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">Официальный партнёр</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Официальный дилер<br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Уральского трансформаторного завода
                </span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Прямые поставки трансформаторного оборудования от одного из крупнейших производителей России. Гарантия качества, полный пакет документов и сертификатов.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Icon name="FileCheck" size={40} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Сертификаты качества</h3>
                  <p className="text-slate-400 text-sm">Вся продукция сертифицирована</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Icon name="ShieldCheck" size={40} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Заводская гарантия</h3>
                  <p className="text-slate-400 text-sm">5 лет на всё оборудование</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Icon name="TrendingDown" size={40} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Лучшие цены</h3>
                  <p className="text-slate-400 text-sm">Работаем напрямую с заводом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Контакты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon name="MapPin" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Головной офис</h3>
              <p className="text-slate-600 text-lg">г. Санкт-Петербург</p>
              <p className="text-slate-500 text-sm mt-4">ПН – ПТ, 9:00-18:00</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon name="Phone" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Связь с нами</h3>
              <p className="text-slate-500 text-sm mb-2">Отдел продаж:</p>
              <a href="tel:+79624424921" className="text-slate-900 font-semibold text-lg hover:text-amber-600 transition-colors">8 962 442-49-21</a>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Icon name="Mail" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-slate-900">Email</h3>
              <p className="text-slate-600 text-sm mb-2">Коммерческий отдел:</p>
              <a href="mailto:zva7777@bk.ru" className="text-slate-900 hover:text-amber-600 transition-colors">zva7777@bk.ru</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg">
                <Icon name="Zap" size={20} className="text-slate-900" />
              </div>
              <span className="text-xl font-bold">МЕРКУРИЙ</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400">
                © 2025 Меркурий. Поставка трансформаторного оборудования
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Политика конфиденциальности • Правовая информация
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-slate-900">Свяжитесь с нами</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl">
              <Icon name="Phone" size={48} className="text-amber-400" />
            </div>
            <div className="text-center space-y-4">
              <div>
                <p className="text-slate-600 mb-2 text-sm">Отдел продаж:</p>
                <a href="tel:+79624424921" className="text-3xl font-bold text-slate-900 hover:text-amber-600 block transition-colors">
                  8 962 442-49-21
                </a>
              </div>
              <div>
                <p className="text-slate-600 mb-2 text-sm">Технический отдел:</p>
                <a href="tel:+79588581999" className="text-3xl font-bold text-slate-900 hover:text-amber-600 block transition-colors">
                  8 958 858-19-99
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-500 text-center">
              Мы работаем ПН-ПТ с 9:00 до 18:00
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;