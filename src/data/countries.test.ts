import { describe, expect, it } from "bun:test";
import { countries, getCountryByCode } from "./countries";

describe("country pricing", () => {
  it("shows $10 with $40 crossed out for non-India countries", () => {
    const nonIndiaCountries = countries.filter((country) => country.code !== "in");

    expect(nonIndiaCountries.length).toBeGreaterThan(0);
    for (const country of nonIndiaCountries) {
      expect(country.currency).toBe("USD");
      expect(country.price).toBe("$10");
      expect(country.priceValue).toBe(10);
      expect(country.originalPrice).toBe("$40");
    }
  });

  it("keeps India's ₹499 price and ₹2,999 crossed-out price", () => {
    const india = getCountryByCode("in");

    expect(india?.currency).toBe("INR");
    expect(india?.price).toBe("₹499");
    expect(india?.priceValue).toBe(499);
    expect(india?.originalPrice).toBe("₹2,999");
  });
});