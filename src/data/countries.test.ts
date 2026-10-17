import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { countries, getCountryByCode } from "./countries";

describe("country pricing", () => {
  it("shows $10 with $40 crossed out for non-India countries", () => {
    const nonIndiaCountries = countries.filter((country) => country.code !== "in");

    assert.ok(nonIndiaCountries.length > 0);
    for (const country of nonIndiaCountries) {
      assert.equal(country.currency, "USD");
      assert.equal(country.price, "$10");
      assert.equal(country.priceValue, 10);
      assert.equal(country.originalPrice, "$40");
    }
  });

  it("keeps India's ₹499 price and ₹2,999 crossed-out price", () => {
    const india = getCountryByCode("in");

    assert.equal(india?.currency, "INR");
    assert.equal(india?.price, "₹499");
    assert.equal(india?.priceValue, 499);
    assert.equal(india?.originalPrice, "₹2,999");
  });
});