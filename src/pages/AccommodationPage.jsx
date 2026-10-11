import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, AlertCircle, Building, BedDouble, Info } from 'lucide-react';
import './AccommodationPage.css';

const accommodationData = [
  {
    id: 1,
    name: 'AB Hotel Ashta',
    city: 'Ashta',
    website: 'https://www.makemytrip.com/hotels/ab_hotel_and_restaurant-details-ashta.html',
    websiteLabel: 'AB Hotel and Restaurant | MakeMyTrip',
    address: 'Indore – Bhopal Rd, Ashta, Kaji Khedi, Madhya Pradesh 466116',
    contacts: [
      { name: 'Deepak Bakoriya', phone: '+91 7610397250', tel: '+917610397250' }
    ],
    rooms: [
      {
        type: 'Non-AC Double Occupancy',
        tariff: '1400',
        available: '3',
        remarks: 'IBCD-2026 Tariff Only'
      },
      {
        type: 'AC Double Occupancy',
        tariff: '1600',
        available: '8',
        remarks: 'IBCD-2026 Tariff Only'
      }
    ]
  },
  {
    id: 2,
    name: 'AB Hotel Sehore',
    city: 'Sehore',
    website: 'https://www.makemytrip.com/hotels/ab_hotel-details-sehore.html',
    websiteLabel: 'AB Hotel, Sehore | MakeMyTrip',
    address: 'Arun Colony, near New Bus Stand, Ganj, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: 'Nilesh Jaiswal', phone: '+91 77710 14301', tel: '+917771014301' }
    ],
    rooms: [
      {
        type: 'AC – Deluxe (Double Occupancy)',
        tariff: '1530',
        available: '5',
        remarks: 'IBCD-2026 Tariff Only'
      },
      {
        type: 'AC – Executive (Double Occupancy)',
        tariff: '1710',
        available: '5',
        remarks: 'IBCD-2026 Tariff Only (Additional 300/- third person)'
      },
      {
        type: 'AC – Club (Double Occupancy)',
        tariff: '2160',
        available: '7',
        remarks: 'IBCD-2026 Tariff Only (Additional 300/- third person)'
      },
      {
        type: 'AC – Suite (Double Occupancy)',
        tariff: '2520',
        available: '1',
        remarks: 'IBCD-2026 Tariff Only (Additional 300/- third person)'
      }
    ]
  },
  {
    id: 3,
    name: 'Hotel Saviraj',
    city: 'Sehore',
    website: null,
    websiteLabel: null,
    address: 'Near Gurudwara, Ganga Ashram, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '9827314213', tel: '9827314213' },
      { name: '', phone: '7000385818', tel: '7000385818' },
      { name: '', phone: '7000385755', tel: '7000385755' }
    ],
    rooms: [
      {
        type: 'Non-AC (Double Occupancy)',
        tariff: '1200',
        available: '—',
        remarks: '—'
      },
      {
        type: 'AC (Double Occupancy)',
        tariff: '1400',
        available: '—',
        remarks: '—'
      }
    ]
  },
  {
    id: 4,
    name: 'Hotel Shri Kashi',
    city: 'Sehore',
    website: null,
    websiteLabel: null,
    address: 'New Bus Stand, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '9302046911', tel: '9302046911' },
      { name: '', phone: '7771039114', tel: '7771039114' }
    ],
    rooms: [
      {
        type: 'Double Occupancy (Non-AC/AC)',
        tariff: '800, 1000, 1200',
        available: '6',
        remarks: '—'
      },
      {
        type: 'Family Room (4 persons)',
        tariff: '2500',
        available: '1',
        remarks: '—'
      },
      {
        type: '5-bed Dormitory',
        tariff: '300/- Bed',
        available: '1',
        remarks: '—'
      }
    ]
  },
  {
    id: 5,
    name: 'Hotel Adhishree',
    city: 'Sehore',
    website: 'https://www.makemytrip.com/hotels/hotel_adhishree-details-sehore.html',
    websiteLabel: 'Hotel Adhishree | MakeMyTrip',
    address: 'Arun Colony, near New Bus Stand, Ganj, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '8889437172', tel: '8889437172' }
    ],
    rooms: [
      {
        type: 'Double Occupancy',
        tariff: '1785',
        available: '10',
        remarks: '—'
      },
      {
        type: 'Family Room (2 bed)',
        tariff: '2625',
        available: '4',
        remarks: '—'
      },
      {
        type: 'President Room',
        tariff: '3360',
        available: '1',
        remarks: '—'
      }
    ]
  },
  {
    id: 6,
    name: 'Hotel Parvati Palace',
    city: 'Sehore',
    website: 'https://www.makemytrip.com/hotels/hotel_parvati_palace-details-sehore.html',
    websiteLabel: 'Hotel Parvati Palace | MakeMyTrip',
    address: 'Tehsil Chouraha, Main Road, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '089894 06013', tel: '08989406013' }
    ],
    rooms: [
      {
        type: 'Standard Non AC Room',
        tariff: '900',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Aircooled Room',
        tariff: '1000',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Standard AC Room',
        tariff: '1300',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Deluxe AC Room',
        tariff: '1350',
        available: '—',
        remarks: '—'
      }
    ]
  },
  {
    id: 7,
    name: 'Graces Resort',
    city: 'Sehore',
    website: 'https://gracesresort.com/',
    websiteLabel: 'Graces Resort | Official Website',
    address: 'Village konajheer, sehore ichhawar, road, adjacent to Bhopal- Indore highway, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '092852 04856', tel: '09285204856' }
    ],
    rooms: [
      {
        type: 'Deluxe Cottage With Balcony',
        tariff: '3900',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Safari Cottage with lawn',
        tariff: '4500',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Premium Cottage with Closed Balcony',
        tariff: '4900',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Holiday Villa With Balcony',
        tariff: '5300',
        available: '—',
        remarks: '—'
      }
    ]
  },
  {
    id: 8,
    name: 'The Crescent Resort and Club',
    city: 'Sehore',
    website: 'https://www.crescentresorts.in/sehore/',
    websiteLabel: 'The Crescent Resort and Club | Official Website',
    address: 'New bypass Road, Sehore, Madhya Pradesh 466001',
    contacts: [
      { name: '', phone: '096850 40007', tel: '09685040007' }
    ],
    rooms: [
      {
        type: 'Deluxe',
        tariff: '4200',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Executive Room Twin beds',
        tariff: '6300',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Executive Rooms',
        tariff: '6800',
        available: '—',
        remarks: '—'
      }
    ]
  },
  {
    id: 9,
    name: 'VELORA GROUP',
    city: 'Sehore',
    website: null,
    websiteLabel: null,
    address: 'Hotel velora & Cafe Vicolo, infront of VIT, Indore - Bhopal Rd, Kothri, Sehore, Madhya Pradesh 466114',
    contacts: [
      { name: '', phone: '9826014717', tel: '9826014717' }
    ],
    rooms: [
      {
        type: 'Single occupancy',
        tariff: '2500 per day',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Double occupancy',
        tariff: '3000 per day',
        available: '—',
        remarks: '—'
      },
      {
        type: 'Triple Occupancy',
        tariff: '3500 per day',
        available: '—',
        remarks: '—'
      }
    ]
  },
  {
    id: 10,
    name: 'Dream Resort',
    city: 'Ashta',
    website: 'https://www.makemytrip.com/hotels/dream_resort-details-ashta.html',
    websiteLabel: 'Dream Resort | MakeMyTrip',
    address: 'Jod, Jatakheda, Indore - Bhopal Rd, Ashta, Madhya Pradesh 466116',
    contacts: [
      { name: '', phone: '093019 88004', tel: '09301988004' }
    ],
    rooms: [
      {
        type: 'Single occupancy',
        tariff: '2500 per day',
        available: '—',
        remarks: 'Including breakfast.'
      },
      {
        type: 'Double occupancy',
        tariff: '3000 per day',
        available: '—',
        remarks: 'Including breakfast.'
      }
    ]
  }
];

const AccommodationPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredHotels = accommodationData.filter((hotel) => {
    if (selectedFilter === 'all') return true;
    return hotel.city.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="accomm-page-wrapper">
      <header className="accomm-page-header">
        <div className="accomm-page-container">
          <div className="accomm-breadcrumbs">
            <a href="/">Home</a> &gt; <span>Accommodation</span>
          </div>
          <h1 className="accomm-title">Accommodation in Sehore &amp; Ashta</h1>
          <p className="accomm-subtitle">
            Hotel options, room tariffs, room counts from provided details, and direct hotel contact numbers for IBCD 2026 attendees.
          </p>
        </div>
      </header>

      <section className="accomm-section accomm-page-container">
        {/* Prominent Mandatory Booking Notice */}
        <div className="accomm-notice-box">
          <div className="accomm-notice-icon-wrapper">
            <AlertCircle size={22} className="accomm-notice-icon" />
          </div>
          <div className="accomm-notice-content">
            <p className="accomm-notice-text">
              <strong>Note:</strong> For room booking, contact to hotel directly and book your accommodation.
            </p>
          </div>
        </div>

        {/* Toolbar: Location Filter */}
        <div className="accomm-toolbar">
          <div className="accomm-filter-group">
            <span className="accomm-filter-label">Filter Location:</span>
            <button
              type="button"
              className={`accomm-pill-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Hotels ({accommodationData.length})
            </button>
            <button
              type="button"
              className={`accomm-pill-btn ${selectedFilter === 'sehore' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('sehore')}
            >
              Sehore ({accommodationData.filter((h) => h.city === 'Sehore').length})
            </button>
            <button
              type="button"
              className={`accomm-pill-btn ${selectedFilter === 'ashta' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('ashta')}
            >
              Ashta ({accommodationData.filter((h) => h.city === 'Ashta').length})
            </button>
          </div>
        </div>

        {/* Sole Card View Layout */}
        <div className="accomm-cards-grid">
          {filteredHotels.map((hotel) => (
            <article key={hotel.id} className="accomm-card">
              <div className="accomm-card-header">
                <div className="accomm-card-title-row">
                  <span className="accomm-card-city-badge">{hotel.city}</span>
                  <span className="accomm-card-sno">#{hotel.id}</span>
                </div>
                <h2 className="accomm-card-title">{hotel.name}</h2>
              </div>

              <div className="accomm-card-body">
                {/* Address */}
                <div className="accomm-info-row">
                  <MapPin size={18} className="accomm-icon" />
                  <span className="accomm-info-text">{hotel.address}</span>
                </div>

                {/* Contacts */}
                <div className="accomm-info-row">
                  <Phone size={18} className="accomm-icon" />
                  <div className="accomm-contact-list">
                    {hotel.contacts.map((c, i) => (
                      <div key={i} className="accomm-contact-item">
                        {c.name && <span className="accomm-contact-name">{c.name}: </span>}
                        <a href={`tel:${c.tel}`} className="accomm-phone-link">
                          {c.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Website / Booking Link */}
                <div className="accomm-info-row">
                  <Building size={18} className="accomm-icon" />
                  <div className="accomm-website-wrapper">
                    {hotel.website ? (
                      <a
                        href={hotel.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accomm-website-link"
                      >
                        <span>{hotel.websiteLabel || 'View Booking Page'}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="accomm-no-website">
                        Website: <em>Not available (Book directly via phone)</em>
                      </span>
                    )}
                  </div>
                </div>

                {/* Tariffs and Room Breakdown */}
                <div className="accomm-tariff-section">
                  <h3 className="accomm-tariff-heading">
                    <BedDouble size={16} /> Room Tariffs &amp; Room Details
                  </h3>
                  <div className="accomm-tariff-table-wrap">
                    <table className="accomm-card-subtable">
                      <thead>
                        <tr>
                          <th>Room Category</th>
                          <th>Tariff</th>
                          <th>Rooms (Provided Details)</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotel.rooms.map((room, rIdx) => (
                          <tr key={rIdx}>
                            <td className="room-type-cell">{room.type}</td>
                            <td className="room-rate-cell">{room.tariff}</td>
                            <td className="room-count-cell">{room.available}</td>
                            <td className="room-remark-cell">{room.remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="accomm-tariff-footnote">
                    * Room counts and tariffs reflect figures from the provided conference accommodation details; availability is not guaranteed. Please contact the hotel directly to confirm real-time room availability and tariffs.
                  </p>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="accomm-card-footer">
                {hotel.contacts[0] && (
                  <a href={`tel:${hotel.contacts[0].tel}`} className="accomm-call-btn">
                    <Phone size={15} /> Call Hotel Directly
                  </a>
                )}
                {hotel.website && (
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accomm-visit-btn"
                  >
                    Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Tourism Details Box */}
        <div className="accomm-tourism-box">
          <Info size={20} className="accomm-tourism-icon" />
          <p className="accomm-tourism-text">
            <strong>For Tourism details, visit: </strong>
            <a
              href="https://sehore.nic.in/en/tourism/"
              target="_blank"
              rel="noopener noreferrer"
              className="accomm-tourism-link"
            >
              District Sehore, Government of Madhya Pradesh
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;
