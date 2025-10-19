import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

  const products = [
    { name: 'ТМГ-25 кВА', power: '25', price: '128 000 ₽' },
    { name: 'ТМГ-40 кВА', power: '40', price: '145 000 ₽' },
    { name: 'ТМГ-63 кВА', power: '63', price: '170 000 ₽' },
    { name: 'ТМГ-100 кВА', power: '100', price: '210 000 ₽' },
    { name: 'ТМГ-160 кВА', power: '160', price: '265 000 ₽' },
    { name: 'ТМГ-250 кВА', power: '250', price: '340 000 ₽' },
    { name: 'ТМГ-400 кВА', power: '400', price: '450 000 ₽' },
    { name: 'ТМГ-630 кВА', power: '630', price: '615 000 ₽' },
    { name: 'ТМГ-1000 кВА', power: '1000', price: '880 000 ₽' },
  ];

  const advantages = [
    {
      icon: 'Package',
      title: 'Собственные склады',
      description: 'Все складские помещения в Санкт-Петербурге и области принадлежат нам'
    },
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
      icon: 'Settings',
      title: 'Работа с посредниками',
      description: 'Участвуем в торгах и госзакупках. Прокладываем кабель. Дилерам предоставляем особые условия'
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

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#1e3a8a] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={24} className="text-[#fbbf24]" />
            <span className="text-xl font-bold">МЕРКУРИЙ</span>
          </div>
          <div className="flex flex-col items-end text-sm">
            <a href="tel:+78123456789" className="hover:text-[#fbbf24] transition-colors">8 (812) 345-67-89</a>
            <a href="tel:+78129876543" className="hover:text-[#fbbf24] transition-colors">8 (812) 987-65-43</a>
          </div>
        </div>
      </header>

      <section className="bg-[#1e3a8a] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Продажа трансформаторов в Санкт-Петербурге
          </h1>
          <p className="text-lg mb-8 text-blue-100">
            Силовые и масляные трансформаторы с заводской гарантией до 5 лет
          </p>
          <Button 
            onClick={() => setIsPhoneDialogOpen(true)}
            size="lg" 
            className="bg-[#fbbf24] text-[#1e3a8a] hover:bg-[#f59e0b] font-semibold px-8 py-6 text-lg"
          >
            Получить консультацию
          </Button>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1e3a8a]">Наши преимущества</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1e3a8a] p-3 rounded-lg flex-shrink-0">
                    <Icon name={advantage.icon} size={24} className="text-[#fbbf24]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1e3a8a]">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1e3a8a]">Наша продукция</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <Icon name="Zap" size={64} className="text-[#1e3a8a]" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-[#1e3a8a]">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Трехфазный масляный трансформатор мощностью {product.power} кВА
                  </p>
                  <div className="text-2xl font-bold text-[#1e3a8a] mb-4">{product.price}</div>
                  <Button 
                    onClick={() => setIsPhoneDialogOpen(true)}
                    className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                  >
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Меркурий в цифрах</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#fbbf24] mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1e3a8a]">Контакты</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-[#1e3a8a]" />
              <h3 className="font-semibold mb-2 text-[#1e3a8a]">Офис</h3>
              <p className="text-gray-600 text-sm">г. Санкт-Петербург</p>
              <p className="text-gray-600 text-sm">ул. Строителей, д. 3</p>
              <p className="text-gray-600 text-sm">ПН – ПТ, 9:00-18:00</p>
            </div>
            
            <div className="text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-[#1e3a8a]" />
              <h3 className="font-semibold mb-2 text-[#1e3a8a]">Телефоны</h3>
              <p className="text-gray-600 text-sm">Отдел продаж:</p>
              <p className="text-gray-600 text-sm">8 (812) 345-67-89</p>
              <p className="text-gray-600 text-sm mt-2">Технический отдел:</p>
              <p className="text-gray-600 text-sm">8 (812) 987-65-43</p>
            </div>
            
            <div className="text-center">
              <Icon name="Link" size={32} className="mx-auto mb-4 text-[#1e3a8a]" />
              <h3 className="font-semibold mb-2 text-[#1e3a8a]">Ссылки</h3>
              <p className="text-gray-600 text-sm">Специальные предложения и</p>
              <p className="text-gray-600 text-sm">особые условия для дилеров.</p>
              <p className="text-gray-600 text-sm">Вопросы сотрудничества в</p>
              <p className="text-gray-600 text-sm">Вологодской и Псковской области.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1e3a8a] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-blue-100">
            © 2025 Меркурий. Продажа трансформаторов в Санкт-Петербурге
          </p>
          <p className="text-xs text-blue-200 mt-2">
            Правовая информация (указ.доп.юр.данные) Политика конфиденциальности
          </p>
        </div>
      </footer>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-[#1e3a8a]">Свяжитесь с нами</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-6">
            <div className="bg-[#1e3a8a] p-4 rounded-full">
              <Icon name="Phone" size={48} className="text-[#fbbf24]" />
            </div>
            <div className="text-center space-y-4">
              <div>
                <p className="text-gray-600 mb-1">Отдел продаж:</p>
                <a href="tel:+78123456789" className="text-2xl font-bold text-[#1e3a8a] hover:text-[#1e40af]">
                  8 (812) 345-67-89
                </a>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Технический отдел:</p>
                <a href="tel:+78129876543" className="text-2xl font-bold text-[#1e3a8a] hover:text-[#1e40af]">
                  8 (812) 987-65-43
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Мы работаем ПН-ПТ с 9:00 до 18:00
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
