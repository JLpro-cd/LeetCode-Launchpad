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
    dictionary: [],
    linkedList: [],
    stack: [],
    queue: [],
    tree: [],
}