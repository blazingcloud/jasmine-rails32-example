describe "sanity", ->
    it "1 should == 1", ->
        expect(1).toBe(1)

    it "says hello", ->
        expect(helloWorld()).toEqual("Hello!")
