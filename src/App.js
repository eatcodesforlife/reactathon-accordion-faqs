import React, { useState } from 'react'
import Faq from './components/Faq';
import faqs from './utils/faqs'

function App() {
  return (
    <main >
      <div className="container">
        <h3>Login Frequently Asked Questions and Answers</h3>
        <section className="info">
          {
            faqs.map( (faq) => (
              <Faq key={faq.id} {...faq}/>
            ))
          }
        </section>
      </div>
    </main>
  );
}

export default App;
