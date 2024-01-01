"use client";

import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import { UserAuth } from "./context/AuthContext";
import { Input } from "@/components/ui/input";
import axios from "./../lib/axios";

interface Item {
  id?: string;
  name: string;
  price: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [newItem, setNewItem] = useState<Item>({ name: "", price: "" });

  const { user, isAuthLoading } = UserAuth() || {};

  const addItem = async (e: any) => {
    e.preventDefault();
    if (newItem.name === "" || newItem.price === "") {
      return;
    }

    await addDoc(collection(db, "items"), {
      name: newItem.name.trim(),
      price: newItem.price.trim(),
    });
  };

  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        return items.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setItems(items);
      setTotal(
        items.reduce((acc: number, item: Item) => acc + Number(item.price), 0)
      );
    });
    return () => unsubscribe();
  }, []);

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = axios
        .get("/helloWorld")
        .then((response) => {
          console.log("response", response);
          return response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      const result = await response;
      setData(result);
    };
    // axios
    //   .get("/helloWorld")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       console.error("Response error:", error.response.data);
    //       console.error("Status code:", error.response.status);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       console.error("No response received:", error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.error("Error:", error.message);
    //     }
    //   });

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        {isAuthLoading ? (
          "Loading"
        ) : user ? (
          <div className="flex flex-col gap-6">
            <div className="text-4xl text-center ">Firebase project</div>

            <form className="flex  gap-4">
              <Input
                type="text"
                placeholder="item name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
              />

              <Input
                type="number"
                placeholder="item $"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }
              />
              <button onClick={addItem} type="submit" className="bg-pink-400">
                Add Item
              </button>
            </form>
            <ul className="flex flex-col w-full">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex gap-4 w-full p-3 bg-blur-300 justify-between"
                >
                  <div className=" flex w-full justify-around">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  <button
                    onClick={() => item?.id && deleteItem(item?.id)}
                    className="bg-pink-400 w-4 h-4"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <div>Total: {total}</div>
            <h2 className="w-full flex justify-center">{data}</h2>
          </div>
        ) : (
          "you are not logged in"
        )}
      </div>
    </main>
  );
}
