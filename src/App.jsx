import { Zap, Camera, Box, ArrowRight, Github, Twitter, Mail, Info, Shield, Layers } from 'lucide-react'

function App() {
    return (
        <div className="container">
            <header className="logo-container">
                <img src="/credlogo.png" alt="Logo" className="logo" />
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>
                <section className="hero section">
                    <h1>Pioneering Human-AI Interaction</h1>
                    <p>We build high-performance, synchronized visual intelligence systems that bridge the gap between perception and action.</p>
                    <a href="#" className="btn-primary">Get Started <ArrowRight size={20} style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></a>

                    <div className="icon-container">
                        <Zap size={24} color="#666" />
                        <Camera size={24} color="#666" />
                        <Box size={24} color="#666" />
                        <Layers size={24} color="#666" />
                    </div>
                </section>

                <section id="features" className="section">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Core Capabilities</h2>
                    <div className="grid">
                        <div className="feature-card glass-card">
                            <Camera size={32} className="accent" style={{ marginBottom: '1rem' }} />
                            <h3>Visual Intelligence</h3>
                            <p>State-of-the-art vision models fine-tuned for real-time edge performance and accuracy.</p>
                        </div>
                        <div className="feature-card glass-card">
                            <Zap size={32} className="accent" style={{ marginBottom: '1rem' }} />
                            <h3>Ultra-Low Latency</h3>
                            <p>Synchronized data pipelines ensuring sub-second response times for hardware-critical applications.</p>
                        </div>
                        <div className="feature-card glass-card">
                            <Shield size={32} className="accent" style={{ marginBottom: '1rem' }} />
                            <h3>Secure & Hardware-Native</h3>
                            <p>Direct integration with edge hardware through specialized JSON action protocols.</p>
                        </div>
                    </div>
                </section>

                <section id="about" className="section glass-card" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2>Minimal by Design, Powerful by Intent.</h2>
                        <p>Our philosophy is driven by simplicity. We eliminate the noise between complex AI models and the physical world through strict sequential processing and atomic state management.</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <div style={{ width: '12px', height: '12px', background: '#000', borderRadius: '50%' }}></div>
                                <span>React-Powered</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <div style={{ width: '12px', height: '12px', background: '#000', borderRadius: '50%' }}></div>
                                <span>Vite-Optimized</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="/advancinghumansai.png" alt="Concept" style={{ borderRadius: '16px', filter: 'grayscale(1)' }} />
                    </div>
                </section>
            </main>

            <footer className="section" style={{ textAlign: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '4rem' }}>
                <img src="/credlogo.png" alt="Logo" className="logo" style={{ marginBottom: '2rem', opacity: 0.5 }} />
                <div className="icon-container" style={{ marginBottom: '2rem' }}>
                    <Github style={{ cursor: 'pointer' }} />
                    <Twitter style={{ cursor: 'pointer' }} />
                    <Mail style={{ cursor: 'pointer' }} />
                </div>
                <p style={{ color: '#999', fontSize: '0.9rem' }}>© 2026 Media Hack. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
