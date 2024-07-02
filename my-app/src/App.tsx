import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
