export const processListItems = (content) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;

  const listItems = tempDiv.querySelectorAll("li");

  return Array.from(listItems).map((li) => {
    // Extract the title (text inside <strong>) and clean up
    const title = li.querySelector("strong")?.textContent || "";
    const cleanedTitle = title.replace(/:$/, "").trim(); // Remove colon if present

    // Extract the description and clean up (remove title and colon if present)
    const description = li.textContent
      .replace(title, "") // Remove title part from description
      .replace(/:$/, "") // Remove trailing colon from description
      .trim();

    return {
      title: cleanedTitle,
      description: description,
    };
  });
};

export const htmlContentToArray = (htmlString) => {
  // 1. Remove HTML tags
  const text = htmlString.replace(/<[^>]*>/g, "");
  return text
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
};
