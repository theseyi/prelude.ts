import { LinkedList } from "../src/LinkedList";
import { HashMap } from "../src/HashMap";
import { Option } from "../src/Option";
import { Stream } from "../src/Stream";
import { MyClass } from "./SampleData";
import * as SeqTest from "./Seq";
import * as assert from 'assert'

SeqTest.runTests("LinkedList",
                 LinkedList.ofIterable,
                 LinkedList.of,
                 LinkedList.empty,
                 LinkedList.unfoldRight);

describe("LinkedList toString", () => {
        it("serializes to string correctly", () => assert.equal(
            "LinkedList(1, 2, 3)", LinkedList.of(1,2,3).toString()));
        it("serializes to string correctly - arrays & strings", () => assert.equal(
            "LinkedList([1,'a'])", LinkedList.of([1,'a']).toString()));
        it("serializes to string correctly - custom toString", () => assert.equal(
            "LinkedList({field1: hi, field2: 99})", LinkedList.of(new MyClass("hi", 99)).toString()));
});