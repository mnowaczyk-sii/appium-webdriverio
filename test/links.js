const assert = require("assert")
/// <reference types="@wdio/sync/webdriverio-core"/>
/// <reference types="@wdio/sync"/>

describe("WebdriverIO Navigation Links", function() {
  it("should go to Developer Guide page when choosing Developer Guide link", function() {
    browser.url("http://webdriver.io")
    $("=Docs").click()

    assert.equal(browser.getUrl(), "https://webdriver.io/docs/gettingstarted.html")
  })

  it("should go to API page when choosing API link", function() {
    browser.url("http://webdriver.io")
    $("=API").click()

    assert.equal(browser.getUrl(), "https://webdriver.io/docs/api.html")
  })
})
