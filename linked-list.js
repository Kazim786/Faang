//Question 1 Reverse linked list:

const reverseLinkedList = (head) => 
{
    let current = head
    let prev = null //when we reverse the linkedList null will be the first value
    while(current)
    {
        let next = current.next; //By default .next is pointing to the node that comes after
        current.next = prev //current is equal to 1. So now we changed the default pointing and 1 points to prev and prev is equal to null. The '.next' is the pointer and the pointer is set to pointing at prev now

        prev = current 
        current = next
    }
    return prev
}

//End of question 1