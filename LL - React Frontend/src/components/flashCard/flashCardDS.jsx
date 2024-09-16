export const flashCardsData = {
    list : [
        {
            question: "What is the time complexity of list.append()?",
            answer: "O(1), since it just adds to the end of the list"
        },
        {
            question: "What is the time complexity of list.insert()?",
            answer: "O(n), as it requires the shifting of all elements after the insertion. This can be, at worst, O(n)"
        },
        {
            question: "What is the time complexity of list.remove()?",
            answer: "O(n), as it requires the shifting of all elements after the deletion. This can be, at worst, O(n)"
        },
        {
            question: "What is the time complexity of list.pop() and list.pop(i)?",
            answer: "O(1) for .pop(), which removes the last element, and O(n) for .pop(i), which removes the element at index i and requires shifting all subsequent elements."
        },
        {
            question: "What is the time complexity of indexing a list? (list[i])",
            answer: "O(1)"
        },
        {
            question: "What is the time complexity of list slicing? (list[start:stop:step])",
            answer: "O(k), where k is the length of the slice. Slicing creates an entirely new list."
        },
        {
            question: "What is the time complexity of list.extend()?",
            answer: "O(k), where k is the length of the list we are passing into the method."
        },
        {
            question: "What is the time complexity of list concatenation? (list1 + list2)",
            answer: "O(n + m), where n and m are the lengths of the two lists."
        },
        {
            question: "What is the time complexity of membership checking in a list? (x in list)",
            answer: "O(n)"
        },
        {
            question: "What is the time complexity of list.sort()?",
            answer: "O(n log n). Python uses Timsort for this, which is a hybrid sorting algorithm derived from merge sort and insertion sort."
        },
        {
            question: "What is the time complexity of list.reverse()?",
            answer: "O(n)"
        },
        {
            question: "What is the time complexity of list.copy()?",
            answer: "O(n). This returns a shallow copy, which is a new list with references to the same objects. Changes to mutable objects in one list will affect the other."
        },
        {
            question: "What is the time complexity of list.clear()?",
            answer: "O(n)"
        },

    ],
    set: [
        {
            question: "What is the time complexity of set.add()?",
            answer: "O(1) on average. This accounts for rare hash collisions that can degrade performance."
        },
        {
            question: "What is the time complexity of set.remove()?",
            answer: "O(1) on average, but raises a KeyError if the element is not found."
        },
        {
            question: "What is the time complexity of set.discard()?",
            answer: "O(1) on average, and does nothing if an element is not found."
        },
        {
            question: "What is the time complexity of checking membership? (x in set)",
            answer: "O(1) on average. This is one of the strong points of sets."
        },
        {
            question: "What is the time complexity of set union? (set1 | set2 or set1.union(set2))",
            answer: "O(n + m), where n and m are the lengths of set1 and set2."
        },
        {
            question: "What is the time complexity of set intersection? (set1 & set2 or set1.intersection(set2))",
            answer: "O(min(n, m)), where n and m are the lengths of set1 and set2."
        },
        {
            question: "What is the time complexity of set difference? (set1 - set2 or set1.difference(set2))",
            answer: "O(n), where n is the length of set1."
        },
        {
            question: "What is the time complexity of set.copy()?",
            answer: "O(n). This returns a shallow copy, which is a new set with references to the same objects. Changes to mutable objects in one set will affect the other."
        },
        {
            question: "What is the time complexity of set.clear()?",
            answer: "O(n), as it removes all elements from the set."
        }
    ],
    dictionary: [
        {
            question: "What is the time complexity of dict.get(key)?",
            answer: "O(1) on average. This is for retrieving a value by key."
        },
        {
            question: "What is the time complexity of dict[key] = value?",
            answer: "O(1) on average."
        },
        {
            question: "What is the time complexity of dict.pop(key)?",
            answer: "O(1) on average, but raises a KeyError if the key is not found."
        },
        {
            question: "What is the time complexity of dict.popitem()?",
            answer: "O(1). This removes and returns the key-value pair last inserted into the dictionary. This used to return an arbitrary pair, until version 3.7, where dictionaries and sets began having order as well."
        },
        {
            question: "What is the time complexity of checking membership? (key in dict)",
            answer: "O(1) on average. This is one of the strong points of dictionaries."
        },
        {
            question: "What is the time complexity of dict.update(other_dict)?",
            answer: "O(m), where m is the length of other_dict, as it updates the dictionary with key-value pairs from other_dict."
        },
        {
            question: "What is the time complexity of dict.clear()?",
            answer: "O(n), as it removes all elements from the dictionary."
        },
        {
            question: "What is the time complexity of dict.copy()?",
            answer: "O(n). This returns a shallow copy, which is a new dictionary with references to the same objects. Changes to mutable objects in one dictionary will affect the other."
        },
        {
            question: "What is the time complexity of dict.setdefault(key, default)?",
            answer: "O(1) on average. It inserts a key with a value of default if the key is not in the dictionary."
        }
    ],
    linked_list: [
        {
            question: "What is the time complexity of adding an element to the beginning of a linked list?",
            answer: "O(1). This operation involves updating the head pointer to the new node."
        },
        {
            question: "What is the time complexity of adding an element to the end of a singly linked list?",
            answer: "O(n). This requires traversal to the end of the list."
        },
        {
            question: "What is the time complexity of adding an element to the end of a doubly linked list?",
            answer: "O(1), assuming that the tail pointer is maintained. Otherwise, O(n)."
        },
        {
            question: "What is the time complexity of removing an element from a linked list??",
            answer: "O(1). This requires us to update the head pointer.."
        },
        {
            question: "What is the time complexity of removing an element from the end of a singly linked list?",
            answer: "O(n). This requires traversal to the second-to-last element."
        },
        {
            question: "What is the time complexity of removing an element from the end of a doubly linked list?",
            answer: "O(1), assuming the tail pointer is maintained. Otherwise, O(n)."
        },
        {
            question: "What is the time complexity of searching for an element in a linked list?",
            answer: "O(n). This requires traversal of the list."
        },
        {
            question: "What is the time complexity of adding an element at a specific position in a linked list?",
            answer: "O(n). This requires traversal to the specified position."
        },
        {
            question: "What is the time complexity of removing an element at a specific position in a linked list?",
            answer: "O(n). This requires traversal to the specified position."
        }
    ],
    queue: [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],
    tree: [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ],
    heap: [
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        },
        {
            question: "",
            answer: ""
        }
    ]
}