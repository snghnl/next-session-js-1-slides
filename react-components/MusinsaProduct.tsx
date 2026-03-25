import { useState } from "react";
import { Heart } from "lucide-react";
import nikeShoes from "../assets/nike-shoes.png";
import nikeLogo from "../assets/nike-logo.webp";

export default function MusinsaProduct() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(396);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div
      style={{
        transform: "scale(0.5)",
        transformOrigin: "top center",
        width: "200%",
        marginLeft: "-50%",
      }}
    >
      <div
        style={{
          width: "390px",
          margin: "0 auto",
          backgroundColor: "#fff",
          fontFamily: '"Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
          fontSize: "14px",
          color: "#111",
          paddingBottom: "80px",
        }}
      >
        {/* Product image placeholder */}
        <div
          style={{
            width: "100%",
            height: "390px",
            backgroundColor: "#f0f0f0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={nikeShoes}
            alt="Nike P-6000"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Shipping banner */}
        <div
          style={{
            backgroundColor: "#1a4fa0",
            color: "#fff",
            fontSize: "13px",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "16px" }}>🚀</span>주 7일 언제나 당일발송,
          전상품 무료배송
          <strong style={{ marginLeft: "4px" }}>무배당발</strong>
          <span style={{ marginLeft: "2px" }}>›</span>
        </div>

        {/* Brand row */}
        <div
          style={{
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "900",
                fontStyle: "italic",
              }}
            >
              <img
                src={nikeLogo}
                alt="Nike"
                style={{ width: "20px" }}
              />
            </div>
            <span style={{ fontSize: "15px", fontWeight: "600" }}>나이키</span>
          </div>
          <button
            style={{
              background: "none",
              border: "1px solid #ddd",
              borderRadius: "20px",
              padding: "5px 12px",
              fontSize: "13px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#111",
              justifyContent: "center",
            }}
          >
            <Heart size="16" />
            <span style={{ fontWeight: "500" }}>45만</span>
          </button>
        </div>

        {/* Product info */}
        <div style={{ padding: "14px 16px" }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>
            신발 › 스니커즈 › 패션스니커즈화 (나이키)
          </div>

          {/* Product name */}
          <h2
            style={{
              fontSize: "17px",
              fontWeight: "700",
              lineHeight: "1.5",
              margin: "0 0 12px",
            }}
          >
            P-6000 M - 칼리지 그레이:배스트 그레이:코코넛 밀크:버건디 크러시 /
            CD6404-028
          </h2>

          {/* Tags */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
            <span
              style={{
                backgroundColor: "#e8f0ff",
                color: "#2563eb",
                fontSize: "11px",
                fontWeight: "600",
                padding: "3px 7px",
                borderRadius: "3px",
              }}
            >
              킥스위크
            </span>
            <span
              style={{ fontSize: "12px", color: "#555", alignSelf: "center" }}
            >
              무료반품
            </span>
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "#f59e0b", fontSize: "16px" }}>★</span>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>4.9</span>
            <span
              style={{
                fontSize: "13px",
                color: "#2563eb",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              후기 16개
            </span>
          </div>

          {/* Delivery guarantee */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "16px",
              color: "#1a4fa0",
              fontSize: "13px",
            }}
          >
            <span style={{ fontSize: "15px" }}>🚀</span>
            오늘 22시까지 결제 시 내일(수) 도착보장
          </div>

          {/* Price row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "22px", fontWeight: "700" }}>
              139,000원
            </span>
            <button
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "6px 14px",
                fontSize: "13px",
                backgroundColor: "#fff",
                cursor: "pointer",
                color: "#111",
              }}
            >
              쿠폰 ›
            </button>
          </div>
        </div>

        {/* Bottom action bar */}
        <div
          style={{
            position: "fixed",
            bottom: "0",
            width: "390px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderTop: "1px solid #eee",
            padding: "10px 16px",
            gap: "12px",
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={toggleLike}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 8px",
              color: liked ? "#e53e3e" : "#555",
              minWidth: "48px",
            }}
          >
            <span style={{ fontSize: "22px" }}>
              {liked ? <Heart fill="red" color="red" /> : <Heart />}
            </span>
            <span style={{ fontSize: "11px", fontWeight: "500" }}>
              {likeCount}
            </span>
          </button>

          <button
            style={{
              flex: 1,
              height: "48px",
              backgroundColor: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
