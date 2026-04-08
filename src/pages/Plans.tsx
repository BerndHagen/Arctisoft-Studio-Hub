import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Plans.css'

interface Feature {
  label: string
  basic: boolean | string
  premium: boolean | string
}

interface ProductPlan {
  id: string
  name: string
  tagline: string
  context?: string
  icon: string
  freeForever?: boolean
  stripeUrl?: string
  price?: string
  features: Feature[]
}

const products: ProductPlan[] = [
  {
    id: 'medio',
    name: 'Medio',
    tagline: 'Universal Downloader',
    context: 'A lightweight tool covering 1,000+ platforms - great value for everyday downloading.',
    icon: '/medio-icon.png',
    stripeUrl: 'https://buy.stripe.com/eVaeVv1qggfBgwMfZ1',
    price: '€7.99',
    features: [
      { label: 'Platform Support', basic: '1,000+ Platforms', premium: '1,000+ Platforms' },
      { label: 'Max Video Quality', basic: 'Up to 1440p', premium: 'Up to 4320p (8K)' },
      { label: 'Concurrent Downloads', basic: 'Queue of 3', premium: 'Queue of 20' },
      { label: 'Download Speed', basic: true, premium: true },
      { label: 'Playlist & Mix Downloads', basic: false, premium: true },
      { label: 'Hardware GPU Acceleration', basic: true, premium: true },
      { label: 'Cloud-Synced Settings', basic: true, premium: true },
      { label: 'Download History', basic: '60 Entries', premium: '300 Entries' },
      { label: 'Advanced Codec Selection', basic: false, premium: true },
      { label: 'Two-Pass Encoding', basic: false, premium: true },
      { label: 'Audio Processing Suite', basic: false, premium: true },
      { label: 'SponsorBlock Ad-Skipper', basic: false, premium: true },
      { label: 'Cross-Device Profile Sync', basic: false, premium: true },
      { label: 'Permanent Cloud Profile', basic: false, premium: true },
    ],
  },
  {
    id: 'waveshaper',
    name: 'WaveShaper',
    tagline: 'Audio Processing Studio',
    context: 'A full professional audio studio - multiband compression, mastering suite, and lossless export up to 192 kHz.',
    icon: '/waveshaper-icon.png',
    stripeUrl: 'https://buy.stripe.com/00w4gB1kebF87L2bhz6Na04',
    price: '€14.99',
    features: [
      { label: '10-Band Parametric EQ', basic: true, premium: true },
      { label: 'Multi-Effects Chain', basic: true, premium: true },
      { label: 'VCA Compression', basic: true, premium: true },
      { label: 'Preset Manager', basic: true, premium: true },
      { label: 'Integrated Audio Player', basic: true, premium: true },
      { label: '8 Visualization Modes', basic: true, premium: true },
      { label: 'Export Formats', basic: 'WAV & MP3', premium: 'WAV, MP3, FLAC, AAC, OGG' },
      { label: 'Max Sample Rate', basic: '48 kHz', premium: '192 kHz' },
      { label: 'Max Bit Depth', basic: '24-bit', premium: '32-bit Float' },
      { label: 'Multiband Compression', basic: false, premium: true },
      { label: 'Mastering Suite (EBU R128)', basic: false, premium: true },
      { label: 'Audio Normalization (Peak/LUFS)', basic: false, premium: true },
      { label: 'Export with Premium Effects', basic: false, premium: true },
      { label: 'Cloud Preset Sync', basic: false, premium: true },
      { label: 'Permanent Cloud Profile', basic: false, premium: true },
    ],
  },
  {
    id: 'metaedit',
    name: 'MetaEdit+',
    tagline: 'Smart Tag Editor',
    icon: '/metaedit-icon.png',
    freeForever: true,
    features: [
      { label: 'Supported Formats', basic: '13 Audio Formats', premium: '13 Audio Formats' },
      { label: 'Tag Fields', basic: '18 Fields', premium: '18 Fields' },
      { label: 'Batch Tag Editing', basic: true, premium: true },
      { label: 'Cover Art Lookup', basic: true, premium: true },
      { label: 'Auto-Tag Engine', basic: true, premium: true },
      { label: 'Format Conversion', basic: true, premium: true },
      { label: 'No Watermarks or Limits', basic: true, premium: true },
    ],
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (value === false) {
    return (
      <span className="plans-cell plans-cell--no">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
    )
  }
  if (value === true) {
    return (
      <span className="plans-cell plans-cell--yes">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    )
  }
  return <span className="plans-cell plans-cell--text">{value}</span>
}

export default function Plans() {
  const navigate = useNavigate()
  const [pendingProduct, setPendingProduct] = useState<ProductPlan | null>(null)

  function handleBuy(product: ProductPlan) {
    setPendingProduct(product)
  }

  function confirmBuy() {
    if (pendingProduct?.stripeUrl) {
      window.electronAPI?.openExternal?.(pendingProduct.stripeUrl)
    }
    setPendingProduct(null)
  }

  return (
    <div className="plans">
      {/* ── Pre-checkout guidance modal ── */}
      {pendingProduct && (
        <div className="plans-modal-overlay" onClick={() => setPendingProduct(null)}>
          <div className="plans-modal" onClick={e => e.stopPropagation()}>
            <div className="plans-modal-header">
              <img src={pendingProduct.icon} alt="" className="plans-modal-icon" />
              <div>
                <h3 className="plans-modal-title">{pendingProduct.name} Premium</h3>
                <span className="plans-modal-price">{pendingProduct.price} - one-time lifetime license</span>
              </div>
            </div>
            <div className="plans-modal-steps">
              <div className="plans-modal-step">
                <span className="plans-modal-step-num">1</span>
                <span>You'll be taken to our secure Stripe checkout page</span>
              </div>
              <div className="plans-modal-step">
                <span className="plans-modal-step-num">2</span>
                <span>After payment your license key is sent to your email</span>
              </div>
              <div className="plans-modal-step">
                <span className="plans-modal-step-num">3</span>
                <span>Redeem your key on the <strong onClick={() => { setPendingProduct(null); navigate('/licenses') }} className="plans-modal-link">Licenses</strong> page of this Hub</span>
              </div>
            </div>
            <div className="plans-modal-actions">
              <button className="plans-modal-confirm" onClick={confirmBuy}>
                Continue to Checkout
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="plans-modal-cancel" onClick={() => setPendingProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Hero */}
      <div className="plans-hero">
        <div className="plans-hero-text">
          <h1>Plans &amp; Pricing</h1>
          <p>One-time payments - no subscriptions, no recurring fees ever</p>
        </div>
        <div className="plans-hero-badge">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4 7 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          </svg>
          Lifetime License
        </div>
      </div>

      {/* Product Comparison Tables */}
      {products.map(product => (
        <section key={product.id} className="plans-product">
          {/* Header */}
          <div className="plans-product-header">
            <div className="plans-product-identity">
              <img src={product.icon} alt="" className="plans-product-icon" />
              <div>
                <h2 className="plans-product-name">{product.name}</h2>
                <span className="plans-product-tagline">{product.tagline}</span>
                {product.context && <span className="plans-product-context">{product.context}</span>}
              </div>
            </div>
            {product.freeForever && (
              <span className="plans-free-badge">100% Free</span>
            )}
          </div>

          {/* Table */}
          <div className="plans-table-wrap">
            <table className="plans-table">
              <thead>
                <tr>
                  <th className="plans-th-feature">Feature</th>
                  <th className="plans-th-tier">
                    <div className="plans-th-content">
                      <span className="plans-th-name">Basic</span>
                      <span className="plans-th-price">Free</span>
                    </div>
                  </th>
                  {product.freeForever ? (
                    <th className="plans-th-tier plans-th-free">
                      <div className="plans-th-content">
                        <span className="plans-th-name">All Features</span>
                        <span className="plans-th-price">Included</span>
                      </div>
                    </th>
                  ) : (
                    <th className="plans-th-tier plans-th-premium">
                      <div className="plans-th-content">
                        <span className="plans-th-name">Premium</span>
                        <span className="plans-th-price">{product.price}</span>
                        <span className="plans-th-note">one-time</span>
                      </div>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {product.features.map(f => (
                  <tr key={f.label} className="plans-tr">
                    <td className="plans-td-feature">{f.label}</td>
                    <td className="plans-td-value"><CellValue value={f.basic} /></td>
                    <td className="plans-td-value plans-td-premium"><CellValue value={f.premium} /></td>
                  </tr>
                ))}
              </tbody>
              {!product.freeForever && product.stripeUrl && (
                <tfoot>
                  <tr>
                    <td />
                    <td />
                    <td className="plans-td-cta">
                      <button
                        className="plans-buy-btn"
                        onClick={() => handleBuy(product)}
                      >
                        Get Premium - {product.price}
                      </button>
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </section>
      ))}

      {/* Footer note */}
      <p className="plans-note">
      After purchase you'll receive a license key by email. Redeem it on the <strong>Licenses</strong> page of the Hub - or in the Settings page of the respective application.
        Your license is tied to your Arctisoft account and works on any device you're signed in to.
      </p>
    </div>
  )
}


