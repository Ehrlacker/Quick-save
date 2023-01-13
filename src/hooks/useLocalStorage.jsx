import {useState, useEffect} from "react"

const getSavedItem = (key, initialItem) => {
	const savedItem = JSON.parse(localStorage.getItem(key))
	if (savedItem) return savedItem
	if (initialItem instanceof Function) return initialItem()
	return initialItem
}

const useLocalStorage = (key, initialItem) => {
	const [item, setItem] = useState(() => {
		return getSavedItem(key, initialItem)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(item))
	}, [item, key])
	return [item, setItem]
}

export default useLocalStorage
