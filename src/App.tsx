import { AiFillHeart } from "react-icons/ai";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "ddsa", amount: 10, category: "Utilities" },
    { id: 3, description: "asdas", amount: 10, category: "Utilities" },
    { id: 4, description: "dasda", amount: 10, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
      <BsFillCalendarFill />
      <div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
