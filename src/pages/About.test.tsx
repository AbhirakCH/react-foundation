// src/pages/About.test.tsx
import { render, screen } from "@testing-library/react";
import About from "./About"; // Import Component ของเรามา
import { describe, it, expect } from "vitest";

describe("About Page", () => {
  it("should render the About page correctly", () => {
    // 1. Arrange: สั่ง Render หน้า About
    render(<About />);

    // 2. Act & Assert: เช็คว่ามีข้อความที่เราต้องการไหม?
    // สมมติในไฟล์ About.tsx คุณมีเขียนคำว่า "About Us" หรือ "เกี่ยวกับเรา"
    // ลองเปลี่ยนข้อความในวงเล็บให้ตรงกับที่คุณเขียนจริงนะครับ
    const headingElement = screen.getByText(/About/i); // /About/i คือค้นหาคำว่า About แบบไม่สนตัวเล็กตัวใหญ่

    expect(headingElement).toBeInTheDocument();
  });
});
