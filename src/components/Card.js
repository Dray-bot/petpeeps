'use client';
import React from 'react';
import styled from 'styled-components';

const Card = ({ title, price, description, badge }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__content">
          {badge && <div className="card__badge">{badge}</div>}
          <div className="card__image" />
          <div className="card__text">
            <p className="card__title">{title}</p>
            <p className="card__description">{description}</p>
          </div>
          <div className="card__footer">
            <div className="card__price">{price}</div>
            <div className="card__button">
              <svg height={24} width={24} viewBox="0 0 24 24">
                <path
                  strokeWidth={2}
                  stroke="currentColor"
                  d="M12 4V20M4 12H20"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --card-bg: #ffffff;
    --card-accent: #38bdf8; /* sky blue */
    --card-text: #1e293b;
    --card-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.15);

    width: 280px;
    height: 380px;
    background: var(--card-bg);
    border-radius: 28px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(56, 189, 248, 0.25);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
  }

  .card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card__glow {
    position: absolute;
    inset: -12px;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(56, 189, 248, 0.35) 0%,
      rgba(56, 189, 248, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .card__content {
    padding: 2em;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    position: relative;
    z-index: 2;
  }

  .card__badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 0.4em 0.8em;
    border-radius: 999px;
    font-size: 0.85em;
    font-weight: 600;
    transform: scale(0.85);
    opacity: 0;
    transition: all 0.4s ease 0.1s;
  }

  .card__image {
    width: 100%;
    height: 180px;
    background: linear-gradient(45deg, #38bdf8, #0ea5e9);
    border-radius: 20px;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .card__title {
    color: var(--card-text);
    font-size: 1.5em;
    margin: 0;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .card__description {
    color: var(--card-text);
    font-size: 0.95em;
    margin: 0;
    opacity: 0.75;
    transition: all 0.3s ease;
  }

  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .card__price {
    color: var(--card-text);
    font-weight: 700;
    font-size: 1.3em;
    transition: all 0.3s ease;
  }

  .card__button {
    width: 44px;
    height: 44px;
    background: var(--card-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(0.95);
  }

  .card:hover {
    transform: translateY(-14px);
    box-shadow:
      0 30px 35px -5px rgba(0, 0, 0, 0.2),
      0 15px 15px -5px rgba(0, 0, 0, 0.05);
    border-color: rgba(56, 189, 248, 0.3);
  }

  .card:hover .card__shine {
    opacity: 1;
    animation: shine 3s infinite;
  }

  .card:hover .card__glow {
    opacity: 1;
  }

  .card:hover .card__badge {
    transform: scale(1);
    opacity: 1;
    z-index: 1;
  }

  .card:hover .card__image {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 15px 20px -3px rgba(0, 0, 0, 0.1);
  }

  .card:hover .card__title {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__description {
    opacity: 1;
    transform: translateX(2px);
  }

  .card:hover .card__price {
    color: var(--card-accent);
    transform: translateX(2px);
  }

  .card:hover .card__button {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(56, 189, 248, 0.2);
  }

  .card:hover .card__button svg {
    animation: pulse 1.5s infinite;
  }

  .card:active {
    transform: translateY(-8px) scale(0.97);
  }

  @keyframes shine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }
`;

export default Card;
