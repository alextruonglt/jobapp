import styled from "styled-components"

const Wrapper = styled.article`
	background: var(--background-secondary-color);
	border-radius: var(--border-radius);
	display: grid;
	grid-template-rows: 1fr auto;
	box-shadow: var(--shadow-2);

	header {
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--grey-100);
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
	}

	.main-icon {
		width: 60px;
		height: 60px;
		display: grid;
		place-items: center;
		background: var(--primary-500);
		border-radius: var(--border-radius);
		font-size: 1.5rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--white);
		margin-right: 2rem;
	}

	.info {
		h5 {
			margin-bottom: 0.5rem;
		}
		p {
			margin: 0;
			text-transform: capitalize;
			letter-spacing: var(--letter-spacing);
			color: var(--text-secondary-color);
			margin-bottom: 0.5rem;
		}
		a {
			text-decoration: none;
			color: var(--primary-500);
			font-weight: bold;
		}
	}

	.content {
		padding: 1rem 1.5rem;
	}

	.content-center {
		display: grid;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
		grid-template-columns: 1fr;
		row-gap: 1.5rem;
		align-items: center;
		@media (min-width: 576px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.status {
		border-radius: var(--border-radius);
		text-transform: capitalize;
		letter-spacing: var(--letter-spacing);
		text-align: center;
		width: 100px;
		height: 30px;
		display: grid;
		align-items: center;
	}

	.actions {
		margin-top: 1rem;
		display: flex;
		align-items: center;
	}

	.edit-btn,
	.delete-btn,
	.description-btn {
		// Apply consistent styles to all action buttons
		height: 30px;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: var(--border-radius);
		background-color: var(--primary-500);
		color: var(--white);
		cursor: pointer;
		transition: var(--transition);
		&:hover {
			background-color: var(--primary-700);
		}
	}

	.job-description {
		margin-top: 1rem;
		background-color: var(--background-color);
		padding: 1rem;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-1);
	}
`

export default Wrapper
